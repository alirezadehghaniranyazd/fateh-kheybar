import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export const contact = {
  cards: [
    {
      id: 1,
      title: "شماره تماس",
      value: "به زودی",
      icon: Phone,
    },
    {
      id: 2,
      title: "آدرس باشگاه",
      value: "یزد، زارچ، باشگاه ورزشی فاتح خیبر",
      icon: MapPin,
    },
    {
      id: 3,
      title: "ساعات تمرین",
      value:
        "کودکان و نوجوانان: روزهای فرد ۱۸:۳۰ تا ۲۰:۰۰\nبزرگسالان: روزهای فرد ۲۰:۰۰ تا ۲۱:۳۰",
      icon: Clock,
    },
  ],

  button: "ثبت نام",
};