import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "../assets/Data";
import { productList } from "../assets/Data";

export function CategoryOverview() {
  // Count products by category
  const categoryCounts = categories.map((category) => {
    const count = productList.filter(
      (product) => product.category === category.title
    ).length;
    return {
      ...category,
      count,
    };
  });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categoryCounts.map((category) => (
        <Card
          key={category.title}
          className="border border-[#e4e4e4] shadow-sm"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#797979]">
              {category.title}
            </CardTitle>
            <div className="text-[#003366]">{category.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{category.count}</div>
            <div className="text-xs text-[#797979] mt-1">Products</div>
            <div className="mt-4">
              <ul className="text-xs text-[#797979] space-y-1">
                {category.list.slice(0, 3).map((item) => (
                  <li key={item} className="truncate">
                    {item}
                  </li>
                ))}
                {category.list.length > 3 && (
                  <li className="text-[#003366]">
                    +{category.list.length - 3} more
                  </li>
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
