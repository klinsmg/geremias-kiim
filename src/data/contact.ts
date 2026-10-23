// Dados de contato centralizados — Geremias Kiim Hair.
// Qualquer link de WhatsApp/Instagram/Facebook do site deve vir daqui,
// em vez de ser montado inline em cada componente.

/** Número do WhatsApp em formato internacional, sem símbolos (para montar URLs wa.me). */
export const whatsappNumber = "351937751253";

/** Número de telefone em formato internacional, com "+" (para links tel: e schema.org). */
export const phoneNumber = "+351937751253";

/** Handle do Instagram, sem @. */
export const instagramHandle = "gkiimhair";

/** URL completa do perfil do Instagram. */
export const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

/** URL completa da página do Facebook. */
export const facebookUrl = "https://www.facebook.com/1086800527840244";

/**
 * Monta o link do WhatsApp (wa.me) para o número do cliente.
 * Quando `mensagem` é informada, é codificada com encodeURIComponent e
 * incluída como `?text=`; quando omitida, retorna só `https://wa.me/<numero>`.
 */
export function whatsappLink(mensagem?: string): string {
  const base = `https://wa.me/${whatsappNumber}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
