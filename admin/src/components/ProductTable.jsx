import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Edit,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  Package,
} from "lucide-react";
import { LuTally1 } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import { productList } from "../assets/Data";
import { categories } from "../assets/Data";

export function ProductTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter products based on search term and selected category
  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryTitle) => {
    const category = categories.find((cat) => cat.title === categoryTitle);
    return category ? category.icon : null;
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="relative w-full sm:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#797979]" />
          <Input
            placeholder="Search products..."
            className="w-full pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                {selectedCategory ? (
                  <>
                    {getCategoryIcon(selectedCategory)}
                    <span>{selectedCategory}</span>
                  </>
                ) : (
                  <>
                    <Package className="w-4 h-4" />
                    <span>All Categories</span>
                  </>
                )}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                <Package className="w-4 h-4 mr-2" />
                All Categories
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.title}
                  onClick={() => setSelectedCategory(category.title)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-[#003366]">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>
                    <div className="w-10 h-10 overflow-hidden rounded-md">
                      <img
                        src={product.image[0] || "/placeholder.svg"}
                        alt={product.title}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 w-fit"
                    >
                      {getCategoryIcon(product.category)}
                      {product.category}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    {/* <div className="flex items-center gap-2">
                      <span className="text-3xl ">
                        <FiEdit />
                      </span>
                      <span className="flex self-center justify-center text-3xl ">
                        <LuTally1 />
                      </span>
                      <span className="text-3xl ">
                        <RiDeleteBinLine />
                      </span>
                    </div> */}
                    <div className="flex items-center justify-end gap-1 pr-1">
                      <Edit className="w-6 h-6 cursor-pointer" />

                      <div className="flex items-center justify-center "></div>

                      <Trash2 className="w-6 h-6 cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
