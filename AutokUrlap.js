class AutokUrlap {
  constructor(SzuloElem, adat) {
    this.SzuloElem = SzuloElem;
    this.adat = adat;
    this.#autourlap();
    this.RendszamElem = this.SzuloElem.children("form").children("#rendszam");
    this.TipusElem = this.SzuloElem.children("form").children("#tipus");
    this.submitElem = this.SzuloElem.children("form").children("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.adatgyujt();
      this.#feltoles("ujadat");
    });
  }
  #autourlap() {
    let txt = "";
    txt += `<form>
        <label for="rendszam">Rendszám:</label><br>
        <input type="text" id="rendszam" name="rendszam"><br>
        <label for="tipus">Típus:</label><br>
        <input type="text" id="tipus" name="tipus">
        <input type="submit" id ="submit" value="Submit">
      </form>`;
    this.SzuloElem.append(txt);
  }
  adatgyujt() {
    this.adat = {
      Rendszam: this.RendszamElem.val(),
      Tipus: this.TipusElem.val(),
    };
  }
  #feltoles(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this.adat });
    window.dispatchEvent(esemenyem);
  }
}
export default AutokUrlap;
