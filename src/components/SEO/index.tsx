import { Helmet, HelmetProps } from "react-helmet";

const SEO = ({ children, ...props }: HelmetProps) => {
  return <Helmet {...props}>{children}</Helmet>;
};

export default SEO;
