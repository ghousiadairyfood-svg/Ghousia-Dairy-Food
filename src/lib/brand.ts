export const BRAND = {
  name: "Ghousia Dairy Food",
  tagline: "Pure Dairy | Fresh Mithai | Quality Bakers",
  urduTagline: "آپ کا بھروسہ، ہماری خالص روایت",
  since: 1999,
  address: "Ghousia Dairy Food, Suraj Kund Road, Pull Thokar, Multan, Pakistan",
  mapsUrl: "https://maps.app.goo.gl/QS2kik5tXAB4MqLw5",
  hours: "Monday – Sunday: 06:00 AM – 11:30 PM (Daily Fresh Batch)",
  whatsappPrimary: "923227302121",
  contacts: [
    { name: "Sajid Ali", phone: "03217302121", whatsapp: "923007306784" },
    { name: "Muhammad Ali", phone: "03227302121", whatsapp: "923227302121" },
  ],
  instagram: "https://www.instagram.com/ghousia_dairy_food",
  facebook: "https://www.facebook.com/share/1Ybaz45gf3/",
};

export function whatsAppLinks(message: string, number = BRAND.whatsappPrimary) {
  const text = encodeURIComponent(message);
  return {
    waMe: `https://wa.me/${number}?text=${text}`,
    web: `https://web.whatsapp.com/send?phone=${number}&text=${text}`,
  };
}

export function isMobileWhatsAppDevice() {
  return (
    typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
  );
}

// wa.me is the safest public click-to-chat endpoint across desktop and mobile;
// web.whatsapp.com can be blocked on some networks, so it is kept only as an optional fallback target.
export function waLink(message: string, number = BRAND.whatsappPrimary) {
  return whatsAppLinks(message, number).waMe;
}

export function openWhatsApp(message: string, number = BRAND.whatsappPrimary) {
  const links = whatsAppLinks(message, number);
  const primary = isMobileWhatsAppDevice() ? links.waMe : links.waMe;
  const fallback = links.waMe;

  const opened = window.open(primary, "_blank");
  if (opened) {
    opened.opener = null;
    return { opened: true, primary, fallback };
  }

  window.location.assign(fallback);
  return { opened: false, primary, fallback };
}

export function telLink(num: string) {
  return `tel:+${num.replace(/^0/, "92")}`;
}
