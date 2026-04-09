import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-brand-accent mb-4">
              Data<span className="text-white">Scout</span> KE
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Production-grade data engineering and AI systems for African enterprises.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-accent">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/#solutions" className="hover:text-white transition-colors">Data Pipelines</Link></li>
              <li><Link href="/#solutions" className="hover:text-white transition-colors">AI Systems</Link></li>
              <li><Link href="/#solutions" className="hover:text-white transition-colors">Analytics Dashboards</Link></li>
              <li><Link href="/#solutions" className="hover:text-white transition-colors">Compliance Systems</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-accent">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="https://rose-wabere.vercel.app" target="_blank" className="hover:text-white transition-colors">Meet the Team</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-accent">Connect</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/RoseWabere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/rosewabere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {currentYear} Data Scout KE. All rights reserved.</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  )
}
