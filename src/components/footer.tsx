import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-12 bg-muted/30 text-muted-foreground border-t border-border/50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Contact Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contato</h3>
          <p className="text-sm mb-8">
            Identificou uma oportunidade para aplicar estes serviços ? Entre em contato: 
          </p>
          <div className="flex justify-center md:justify-start gap-12">
            <a
              href="https://github.com/Voctor-367"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.02c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.774.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.768.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.478 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/victorfonteles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.25c.88-.84 2.17-1.25 3.5-1.25 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
              </svg>
            </a>
            <p>victorwilva@gmail.com</p>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
