/**
 * @description this method check if the url is base64 or not and return's the correct url
 * - `base64` then `base64` url
 * - `link` then backend `link`
 * @param currentURL url string
 * @returns
 */
export function getImageURL(currentURL: string) {
  const isBase64 =
    /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
      currentURL
    );
  if (isBase64) {
    return currentURL;
  }
  return `https://piemultilingualbackend.onrender.com/${currentURL}`;
  // return `http://localhost:8000/${currentURL}`;
}
