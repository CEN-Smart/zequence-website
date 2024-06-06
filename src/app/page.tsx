import OurApproach from '@/components/home-page/approach/our-approach';
import Blogging from '@/components/home-page/blog/blogging';
import HomePageCallToAction from '@/components/home-page/call-to-action/call-to-action';
import CompanyDescription from '@/components/home-page/describe/company-description';
import FrequentlyQuestions from '@/components/home-page/faq/frequently-questions';
import Hero from '@/components/home-page/hero/hero';
import InventoryApp from '@/components/home-page/inventory-app/inventory-app';
import ZequencePay from '@/components/home-page/zequence-pay/zequence-pay';

export default function HomePage() {
	return (
		<>
			<Hero />
			<CompanyDescription />
			<OurApproach />
			<InventoryApp />
			<ZequencePay />
			<FrequentlyQuestions />
			<HomePageCallToAction />
			<Blogging />
		</>
	);
}
