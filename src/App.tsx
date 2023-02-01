import React from 'react';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { Portfolio } from './components/portfolio';
import { Services } from './components/services';
import { Testimonials } from './components/testimonials';

export const App = () => {
  return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
  );
}	