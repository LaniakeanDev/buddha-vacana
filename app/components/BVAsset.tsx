/* eslint-disable react/function-component-definition */
import Image from 'next/image';

// BV asset container (wrapper)
interface BVWrappingAssetProps {
  children?: React.ReactElement;
  containerClassName?: string;
}

function BVWrappingAsset({ children, containerClassName = '' }: BVWrappingAssetProps) {
  return <div className={`relative ${containerClassName}`}>{children}</div>;
}

interface BVSVGAssetProps extends BVWrappingAssetProps {
  SVGAsset: BVSVGElement;
  alt?: string;
  assetClassName?: string;
}

const AsSVGAsset =
  (WrappingAsset: React.FC<BVWrappingAssetProps>) =>
  ({ alt, SVGAsset, assetClassName, ...props }: BVSVGAssetProps) => (
    <WrappingAsset {...props}>
      <SVGAsset aria-label={alt} className={assetClassName} />
    </WrappingAsset>
  );

export const BVSVGAsset = AsSVGAsset(BVWrappingAsset);

interface BVImageAssetProps extends BVWrappingAssetProps {
  src: string;
  alt: string;
  assetClassName?: string;
  sizes: string;
}

const AsImageAsset =
  (WrappingAsset: React.FC<BVWrappingAssetProps>) =>
  ({ alt, src, assetClassName, sizes, ...props }: BVImageAssetProps) => (
    <WrappingAsset {...props}>
      <Image src={src} alt={alt} fill className={`object-cover ${assetClassName}`} sizes={sizes} />
    </WrappingAsset>
  );

export const BVImageAsset = AsImageAsset(BVWrappingAsset);
