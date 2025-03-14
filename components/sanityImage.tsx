import React from "react"
import {cn} from "@/lib/util"
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import {client} from "@/src/sanity/lib/client"
import type {SanityImage as SanityImageType} from "@/lib/types"

const builder = imageUrlBuilder(client);
export function urlFor(source:SanityImageType){
  return builder.image(source);
}

export interface Props{
  src: string;
  width:number;
  height:number;
  quality?:number;
  className?:string;
  objectFit?:"cover"|"contain";
  alt:string;
}

export function SanityImage(props:Props){
  const {src,width,height,className,alt,objectFit} = props;
  return (
  <Image src={src} 
  width={width}
  height={height}
  className={cn("overflow-hidden",className)}
  objectFit={objectFit}
  alt={alt}
  />
  );
}
