class TypeWriter extends HTMLElement {
  texts: string[] = [];
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;

  connectedCallback() {
    this.texts = JSON.parse(this.dataset.phrases || "[]");
    if (this.texts.length === 0) return;

    this.textIndex = 0;
    this.charIndex = this.texts[0].length;
    this.isDeleting = false;

    // Start deleting after the initial delay
    setTimeout(() => {
      this.isDeleting = true;
      this.type();
    }, 2500);
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = 2500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

customElements.define("type-writer", TypeWriter);
