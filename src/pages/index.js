import React from "react"
import SEO from "react-seo-component"
import Style from "./index.module.css"
import Layout from "../components/layout"
import ArticlesList from "../components/articles-list"
import * as Icons from "react-icons/si"
import { useIntl } from "gatsby-plugin-intl"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

const HomeIndex = ({ data }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const metadata = useSiteMetadata()
  const { siteTitle, image, siteUrl, twitterUser } = metadata
  
  return (
    <Layout data={metadata}>
      <SEO
        title={siteTitle}
        titleTemplate={t("HomePage.Title")}
        description={t("HomePage.Description")}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={intl.language}
        siteLocale={intl.locale}
        twitterUsername={twitterUser}
      />

      <section className={Style.clearfix}>
        <h1>{t("Greetings")}</h1>
        <img src={require("../images/profile.jpg")} alt="Profile" className={Style.profile}/>
        <p>{t("About.Item1")}<br/>{t("About.Item2")}<br/>{t("About.Item3")}</p>
      </section>

      <section>
        <h2>{t("List.Title")}</h2>
        <p></p>
        <ol className={Style.tasks}>
          <li>{t("List.Item1")} ✓</li>
          <li>{t("List.Item2")} ✓</li>
          <li>{t("List.Item3")} ✓</li>
          <li>{t("List.Item4")}</li>
        </ol>
      </section>
      
      <ArticlesList/>

      <section>
        <h2>{t("Techs.Title")}</h2>
        <p>{t("Techs.Description")}</p>
        <table className={Style.techs}>
          <tbody>
            <tr>
              <td>{t("Techs.Item1")}</td>
              <td>
                <Icons.SiC color='#3747a6'/>
                <Icons.SiCplusplus color='#005697'/>
                <Icons.SiPython color='#f7a000'/>
                <Icons.SiCsharp color='#903ba7'/>
                <Icons.SiJavascript color='#efd81d'/>
              </td>
            </tr>
            <tr>
              <td>{t("Techs.Item2")}</td>
              <td>
                <Icons.SiGatsby color='#663399'/>
                <Icons.SiUnity/>
                <Icons.SiTensorflow color='#ff8500'/>
                ROS
              </td>
            </tr>
            <tr>
              <td>{t("Techs.Item3")}</td>
              <td>
                <Icons.SiMysql color='#006488'/>
                <Icons.SiPostgresql color='#31648c'/>
              </td>
            </tr>
            <tr>
              <td>{t("Techs.Item4")}</td>
              <td>
                <Icons.SiGit color='#e84e31'/>
                <Icons.SiDocker color='#2391e6'/>
                <Icons.SiGnubash/>
                <Icons.SiNeovim color='#5a933a'/>
                <Icons.SiVisualstudiocode color='#0072b9'/>
                <Icons.SiEclipseide color='#5b3e90'/>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default HomeIndex