export const useWhatsApp = () => {
  const config = useRuntimeConfig();
  const number = config.public.whatsappNumber;
  const message = encodeURIComponent(
    "Hi Timeframe, I'd like to discuss a website for my business."
  );
  const url = `https://wa.me/${number}?text=${message}`;
  return { url };
};
