import S from "@sanity/desk-tool/structure-builder";
import { createSuperPane } from "sanity-super-pane";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { BsFileEarmarkPerson } from "react-icons/bs";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Projects")
        // .child(createSuperPane("project"))
        .child(S.documentTypeList("project").title("Projects"))
        .icon(AiOutlineProject),
      S.listItem()
        .title("Blog")
        .schemaType("article")
        // .child(createSuperPane("article"))
        .child(S.documentTypeList("article").title("Blog Posts"))
        .icon(MdOutlineArticle),
      S.listItem()
        .title("Experience")
        .schemaType("experience")
        .child(S.documentTypeList("experience").title("Experience"))
        .icon(ImLab),
      S.listItem()
        .title("Skills")
        .schemaType("skills")
        .child(S.documentTypeList("skills").title("Skills"))
        .icon(BsFileEarmarkPerson),
      S.listItem()
        .title("Sitemap")
        .schemaType("sitemap")
        .child(S.documentTypeList("sitemap").title("Sitemap"))
    ]);