import React from 'react'
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components/index'
import styles from './styles'

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {' '}
            <Navbar />
          </div>
        </div>
        {/* Hero Section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        {/*  */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{' '}
            <Clients /> <CTA /> <Footer />
          </div>
        </div>
      </div>
    )
  }
}
