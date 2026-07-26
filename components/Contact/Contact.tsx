import { contact } from "@/data/contact";
import { Button, Section } from "@/components/ui";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mb-14 text-center">
        <p className="font-semibold text-emerald-600">ارتباط با ما</p>

        <h2 className="mt-3 text-4xl font-black text-slate-900">
          تماس با باشگاه فاتح خیبر
        </h2>

        <p className="mt-4 text-slate-600">
          برای ثبت‌نام و دریافت اطلاعات بیشتر با باشگاه در ارتباط باشید.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {contact.cards.map((item) => (
          <ContactCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button>{contact.button}</Button>
      </div>
    </Section>
  );
}
