import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Timeline from '../components/Timeline'

import events from '../../data/events.es'

const TimelinePage = (props) => (
    <Layout lang="es">
        <Helmet>
            <title>Nahuel Espinosa | Línea de Tiempo</title>
            <meta name="description" content="Página de Línea de Tiempo" />
        </Helmet>

        <Banner title="Línea de Tiempo" sectionStyle="style3">
            <p>Una línea de tiempo es una lista de eventos en orden cronológico <br />
            (según <a href="https://en.wikipedia.org/wiki/Timeline">Wikipedia</a>).</p>
        </Banner>

        <div id="main" className="alt style3">
            <section id="one">
                <div className="inner">
                    <p>Pensé que sería bueno tener una línea de tiempo de mi carrera, así que acá está.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <Timeline events={events}/>
                </div>
            </section>
        </div>

    </Layout>
)

export default TimelinePage