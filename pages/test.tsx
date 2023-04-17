import fs from "fs/promises";
import path from "path";
import React from "react";

export default function courses(props: any) {
  const { products } = props;
  return (
    <div>
      {products.map((product:any) => {
        <div>{product}</div>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  console.log(data);
  

  return {
    props: {
      products: data.products,
    },
  };
}
