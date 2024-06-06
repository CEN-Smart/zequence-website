import ContactUsCallToAction from './call-to-action';
import { ContactUsForm } from './form/contact-us-form';
import ResponsiveImage from '../ui/responsive-image';
import contactUsImage from '/public/images/contact-us-image.png';

const ContactUs = () => {
  return (
    <section className="bg-custom ">
      <div className="flex items-center gap-x-8">
        <ResponsiveImage
          height={500}
          width={500}
          className="hidden xl:block pt-16 xl:pt-0 w-1/2"
          src={contactUsImage}
          alt="Contact Us Image"
        />
        <div className="max-w-[600px] xl:w-[580px] pt-14 xl:pt-0 mx-auto px-4 xl:ml-2">
          <ContactUsForm />
        </div>
      </div>
      <ContactUsCallToAction />
    </section>
  );
};

export default ContactUs;
