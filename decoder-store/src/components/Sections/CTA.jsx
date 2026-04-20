import { Link } from 'react-router-dom';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
 
export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle
          label="STEP INSIDE"
          title="Find your next pair."
          centered
        />
 
        <div className="mt-12">
          <Link to="/shop">
            <Button variant="primary" size="lg" icon>
              EXPLORE THE SHOP
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
 