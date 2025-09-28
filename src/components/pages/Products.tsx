import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { ProductsData } from "@/constants";
import ProductCard from "@/components/Product_card";


const Products = () => {
  return (
    <div className="py-8 px-6 max-w-7xl mx-auto">
    <div className="flex bg-card justify-between items-center gap-3 mb-8 h-20 rounded-2xl px-4">
  <div className="ml-5 text-[30px] ">
    <h1>PRODUCTS</h1>
  </div>
  <div className="flex items-center gap-3">
    <div className="w-80">
      <Input
        placeholder="Enter Products Name...."
        className="h-10 px-4 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
      />
    </div>
    <Button
      variant="default"
      className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200">
      Search
    </Button>
  </div>
</div>
      {/* Your product content will go here */}
      <div  className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-5">

      {ProductsData.Products.map(({img,title,icon,desc,productID,isPaid},index)=>(
        <div  className="" key={index}><ProductCard imgSrc={img} title={title} icon={icon} desc={desc} productID={productID} isPaid={isPaid} ></ProductCard></div>
      ))}

      </div>
    </div>
  )
}

export default Products;