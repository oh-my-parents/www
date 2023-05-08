import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  imgsrc?: string;
};

const SEO = ({
  title = "Oh! My Parents",
  description = "부모님께 보내는 작은 편지: 어버이날 중간고사편",
  keywords = "어버이날",
  imgsrc = "/images/barm.png",
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgsrc} />
      <meta property="og:url" content={window.location.host} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgsrc} />

      <link rel="canonical" href={window.location.host} />
    </Helmet>
  );
};

export default SEO;
