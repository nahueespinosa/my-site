import React from "react"
import SEO from "react-seo-component"
import Style from "./index.module.css"
import Layout from "../components/layout"
import { SiC, SiCplusplus, SiPython, SiGit, SiGnubash, SiCsharp, SiGatsby, SiUnity, SiJavascript, SiNeovim, SiVisualstudiocode, SiEclipseide, SiDocker, SiMysql, SiPostgresql, SiTensorflow } from "react-icons/si"
import { useTranslation } from "react-i18next"

import "../components/i18n"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export default () => {
  const metadata = useSiteMetadata()
  const { description, title, image, url, language, locale, twitterUser } = metadata
  const { t } = useTranslation("translations")

  return (
    <Layout data={metadata}>
      <SEO
        title={title}
        titleTemplate={t('Home')}
        description={description}
        image={`${url}${image}`}
        pathname={url}
        siteLanguage={language}
        siteLocale={locale}
        twitterUsername={twitterUser}
      />

      <section className={Style.clearfix}>
        <h1>{t("Greetings")}</h1>
        <img src={require("../assets/images/pic.jpg")} alt="Profile" className={Style.profile}/>
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

      <section>
        <h2>{t("Techs.Title")}</h2>
        <p>{t("Techs.Description")}</p>
        <table className={Style.techs}>
          <tbody>
            <tr>
              <td>{t("Techs.Item1")}</td>
              <td>
                <SiC color='#3747a6'/>
                <SiCplusplus color='#005697'/>
                <SiPython color='#f7a000'/>
                <SiCsharp color='#903ba7'/>
                <SiJavascript color='#efd81d'/>
              </td>
            </tr>
            <tr>
              <td>{t("Techs.Item2")}</td>
              <td>
                <SiGatsby color='#663399'/>
                <SiUnity/>
                <SiTensorflow color='#ff8500'/>
                ROS
              </td>
            </tr>
            <tr>
              <td>{t("Techs.Item3")}</td>
              <td>
                <SiMysql color='#006488'/>
                <SiPostgresql color='#31648c'/>
              </td>
            </tr>
            <tr>
              <td>{t("Techs.Item4")}</td>
              <td>
                <SiGit color='#e84e31'/>
                <SiDocker color='#2391e6'/>
                <SiGnubash/>
                <SiNeovim color='#5a933a'/>
                <SiVisualstudiocode color='#0072b9'/>
                <SiEclipseide color='#5b3e90'/>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}
