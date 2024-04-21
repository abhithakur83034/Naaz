const Product = require('../model/ProductModel');

const ProductController = {
   addProducts : async(req,res)=>{
       try {
        const path = req.file ? req.file.filename : null;;
        const productData = {
          product_name: req.body.product_name,
          discount_price: req.body.discount_price,
          total_price: req.body.total_price,
          description: req.body.description,
          category: req.body.category,
          color: req.body.color,
          created_at: req.body.created_at,
          size: req.body.size,
          image:path,
        };
        const data = await Product.insertMany(productData);
        if (data) {
          res.status(200).json({
            code: "201",
            message: "Record inserted Successfully",
            status: true,
            data: data,
            error: false,
          });
        }
      } catch (error) {
        res.status(500).json({
          code: "500",
          message: "Internal Server Error",
          status: false,
          data: [],
          error: error,
        });
      }
    },

    getProducts: async (req, res) => {
        try {
          const data = await Product.find().sort({ created_at: -1 });
          if (data.length > 0) {
            res.status(200).json({
              code: "201",
              message: "Record Found",
              status: true,
              data: data,
              error: false,
            });
          } else {
            res.status(404).json({
              code: "404",
              message: "Record Not Found",
              status: false,
              data: [],
              error: false,
            });
          }
        } catch (error) {
          res.status(500).json({
            code: "500",
            message: "Internal Server Error",
            status: false,
            data: [],
            error: true,
          });
        }
      },

  getSingleProduct : async(req,res)=>{
    console.log(req.params.id);
    try {
        const productId = req.params.id;
        const data = await Product.findById(productId);
        if(data){
            res.status(201).json({
                code : "201",
                message :"Record Found!",
                status : true,
                data:data,
                error:false
            })
        }else{
            res.status(400).json({
                code : "400",
                message :"Record Not Found!",
                status : false,
                data:[],
                error:true
            })
        }
        
    } catch (error) {
        res.status(500).json({
            code:"500",
            message:"Internal Server Error",
            status : false,
            data : [],
            error :true
        })
    }
  },

  deleteProducts : async (req,res)=>{
    try {
        const data = await Product.deleteMany();
         if(data.deletedCount > 0){
            res.status(201).json({
                status : '201',
                message :"All Record Deleted successfully",
                status : true,
                data:data,
                error:false
             })
         }else{
            res.status(400).json({
               status : '400',
               message :"Record Not Found!",
               status : false,
               data:[],
               error:true
            })
         }
    } catch (error) {
        res.status(500).json({
            status:"500",
            message:"Internal Server Error",
            data:[],
            status:false,
            error:true
        })
    }
  },
  
  deleteSingleProduct : async (req,res)=>{
    try {
        const product_id = req.params.id;
        const data = await Product.deleteOne({ _id: product_id });
         if(data.deletedCount > 0){
            res.status(201).json({
                status : '201',
                message :"Record Deleted successfully",
                status : true,
                data:data,
                error:false
             })
         }else{
            res.status(400).json({
               status : '400',
               message :"Record Not Found!",
               status : false,
               data:[],
               error:true
            })
         }
    } catch (error) {
        res.status(500).json({
            status:"500",
            message:"Internal Server Error",
            data:[],
            status:false,
            error:true
        })
    }
  },

  updateProduct :async(req,res)=>{
      console.log(req.params);
      const  product_id = req.params.id;
      const path = req.file ? req.file.filename : null;
      const init_data = {
        product_name: req.body.product_name,
        discount_price: req.body.discount_price,
        total_price: req.body.total_price,
        description: req.body.description,
        category: req.body.category,
        color: req.body.color,
        created_at: req.body.created_at,
        image: path,
      };
    try {
        const data = await Product.updateOne({_id : product_id},init_data);
        if (data.matchedCount > 0) {
            res.status(200).json({
              code: "201",
              message: "Product Update Successfully",
              status: true,
              data: data,
              error: false,
            });
          } else {
            res.status(404).json({
              code: "404",
              message: "Record Not Found",
              status: false,
              data: [],
              error: false,
            });
          }
        
    } catch (error) {
        res.status(500).json({
          status:"500",
          message : "Internal Server Error",
          status:false,
          data:[],
          error:true
        })
    }
  }

}


module.exports = ProductController;