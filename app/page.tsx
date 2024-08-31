import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as IImage } from "sanity";

export const getProductdata = async () => {
  const res = await client.fetch(`*[_type == "product"]{
    title,
    description,
    price,
    images,
    _id,
    category->{
      name
    }
  }`);
  return res;
};

interface IProduct {
  title: string;
  _id: string;
  price: number;
  description: string;
  images: IImage [];
  category: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductdata();
 console.log(data)
  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Image
           src={urlFor(product.images).url()}
            alt={`Image of ${product.title}`}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}
