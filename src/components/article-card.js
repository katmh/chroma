/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { transparentize } from "@theme-ui/color"

const styles = {
  link: {
    textDecoration: "none",
    color: "primary",
  },
  title: {
    fontFamily: "heading",
    fontSize: 4,
    m: 0,
    color: "secondary",
  },
  byline: {
    color: transparentize("text", 0.15),
    mt: 1,
    mb: 2,
  },
  excerpt: {
    fontFamily: "body",
    fontSize: 2,
  },
}

const ArticleCard = ({ node }) => {
  return (
    <article>
      <Link
        to={"/p/" + node.frontmatter.path}
        sx={styles.link}
      >
        <h1 sx={styles.title}>
          {node.frontmatter.title}
        </h1>
      </Link>
      <p sx={styles.byline}>
        By {node.frontmatter.author}, {node.frontmatter.date}
      </p>
      <div
        sx={styles.excerpt}
        dangerouslySetInnerHTML={{ __html: node.excerpt }}
      />
    </article>
  )
}

export default ArticleCard
