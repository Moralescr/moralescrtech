class TypeWriter extends HTMLElement {
  texts: string[] = [];
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  private prefersReducedMotion(): boolean {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  connectedCallback() {
    this.clearTimer();
    this.texts = JSON.parse(this.dataset.phrases || "[]");
    if (this.texts.length === 0) return;

    this.textIndex = 0;
    this.charIndex = this.texts[0].length;
    this.isDeleting = false;
    this.textContent = this.texts[0];

    if (this.prefersReducedMotion()) return;

    // Start deleting after the initial delay
    this.timeoutId = setTimeout(() => {
      this.isDeleting = true;
      this.type();
    }, 2500);
  }

  disconnectedCallback() {
    this.clearTimer();
  }

  private clearTimer() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  type() {
    if (this.prefersReducedMotion()) {
      this.textContent = this.texts[this.textIndex] || "";
      this.clearTimer();
      return;
    }

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

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }
}

if (!customElements.get("type-writer")) {
  customElements.define("type-writer", TypeWriter);
}
