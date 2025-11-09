/* ============================================================
 * bibtex.js — toggle and load BibTeX blocks dynamically
 * Author: Aolong Zha
 * Version: 2025-11
 * ============================================================ */

(function () {
  // 缓存整个 bibs.html 内容，避免重复 fetch
  let cachedBibHTML = null;

  window.toggleBib = async function (id, btn) {
    const bibDiv = document.getElementById(id);
    if (!bibDiv) return;

    const isOpen = bibDiv.classList.contains("open");

    // 若已展开，再次点击则关闭
    if (isOpen) {
      bibDiv.classList.remove("open");
      btn.classList.remove("active");
      return;
    }

    // 尚未加载内容则 fetch 一次
    if (!bibDiv.dataset.loaded) {
      try {
        // 缓存加载
        if (!cachedBibHTML) {
          const res = await fetch("/bibs.html");
          cachedBibHTML = await res.text();
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(cachedBibHTML, "text/html");
        const span = doc.querySelector("span#" + id);
        const pre = span ? span.nextElementSibling.cloneNode(true) : null;

        if (pre) {
          const cleanPre = pre.cloneNode(true);
          let html = cleanPre.innerHTML;

          // 检查并替换 DOI 或 URL
          const doiMatch = html.match(/\bdoi\s*=\s*\{([^}]+)\}/i);
          const urlMatch = html.match(/\burl\s*=\s*\{([^}]+)\}/i);

          if (doiMatch) {
            const doi = doiMatch[1].trim();
            const href = "https://doi.org/" + doi;
            html = html.replace(
              doiMatch[0],
              'doi = {<a class="doi-link" href="' +
                href +
                '" target="_blank" rel="noopener">' +
                doi +
                "</a>}"
            );
          } else if (urlMatch) {
            const url = urlMatch[1].trim();
            html = html.replace(
              urlMatch[0],
              'url = {<a class="doi-link" href="' +
                url +
                '" target="_blank" rel="noopener">' +
                url +
                "</a>}"
            );
          }

          cleanPre.innerHTML = html;
          bibDiv.innerHTML =
            '<div class="bib-inner">' + cleanPre.outerHTML + "</div>";
          bibDiv.dataset.loaded = "true";
        } else {
          bibDiv.innerHTML =
            '<p style="color:red;">BibTeX not found.</p>';
        }
      } catch (err) {
        console.error(err);
        bibDiv.innerHTML =
          '<p style="color:red;">Failed to load BibTeX.</p>';
      }
    }

    // 展开与发光效果
    bibDiv.classList.add("open");
    btn.classList.add("active");
  };
})();
