// potential updated to gene information retrieval from ncbi, after a bit of back and forth with Google Gemini to parse better
// note I have no implemented this as of yet in hexamadness

function getGeneInfo(snpId) {
  const geneURL = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=snp&id=${snpId}&report=flt`;

  fetch(geneURL)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const locElement = xmlDoc.querySelector("LOC");
      const clinsigElement = xmlDoc.querySelector("CLINSIG");

      if (locElement && clinsigElement) {
        const geneString = locElement.textContent.trim();
        const clinsig = clinsigElement.textContent.trim();

        $("#rs").prepend(` &nbsp;&nbsp;|&nbsp;&nbsp; ${clinsig}`);
        $("#rs").prepend(` &nbsp;&nbsp;|&nbsp;&nbsp; <em>${geneString}</em> Gene &nbsp;`);
      } else {
        console.error("Gene or ClinSig info not found in XML.");
      }
    })
    .catch(error => {
      console.error("Error fetching or parsing data:", error);
    });
}

// Example usage:
getGeneInfo("rs12345");
