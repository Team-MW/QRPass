import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { QrCode, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="font-sans text-slate-200 min-h-screen flex flex-col">
            <nav className="fixed w-full z-50 glass border-b border-white/10 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center shadow-lg shadow-brand/20">
                                <QrCode className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-tight text-white">
                                QR<span className="text-brand-light">Pass</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-8 items-center relative">
                            <Link to="/fonctionnement" className="hover:text-white transition-colors text-slate-300 font-medium tracking-wide">Comment ça marche</Link>
                            <Link to="/secteurs" className="hover:text-white transition-colors text-slate-300 font-medium tracking-wide">Secteurs & Métiers</Link>
                            <Link to="/tarifs" className="hover:text-white transition-colors text-slate-300 font-medium tracking-wide">Tarifs</Link>

                            <div className="flex gap-4 items-center">
                                <button className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg border border-white/10 transition-all font-medium cursor-pointer">
                                    Se connecter
                                </button>
                                <button className="bg-gradient-to-r from-brand to-accent hover:opacity-90 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg shadow-brand/25 transition-all cursor-pointer">
                                    Démarrer l'essai
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-300 hover:text-white"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden glass border-t border-white/10 bg-[var(--color-dark-surface)] overflow-hidden"
                        >
                            <div className="px-4 pt-4 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
                                <Link to="/fonctionnement" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">Comment ça marche</Link>
                                <Link to="/secteurs" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">Secteurs & Métiers</Link>
                                <Link to="/tarifs" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">Tarifs</Link>
                                <div className="mt-8 flex flex-col gap-4 px-2 border-t border-white/10 pt-8">
                                    <button className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-bold transition-colors hover:bg-white/10">
                                        Se connecter
                                    </button>
                                    <button className="w-full bg-gradient-to-r from-brand to-accent text-white px-5 py-4 rounded-xl font-bold shadow-lg shadow-brand/25">
                                        Démarrer l'essai
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main className="flex-1 flex flex-col pt-20">
                <Outlet />
            </main>

            <footer className="py-12 border-t border-white/5 bg-[#02000a] mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-accent flex items-center justify-center">
                                    <QrCode className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-heading font-bold text-xl tracking-tight text-white">
                                    QR<span className="text-brand-light">Pass</span>
                                </span>
                            </div>
                            <p className="text-slate-400 max-w-sm leading-relaxed">
                                Le logiciel de gestion de file d'attente conçu spécifiquement pour redonner le sourire aux commerçants de proximité et à leurs clients.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 font-heading">Produit</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><Link to="/fonctionnement" className="hover:text-white transition-colors">Comment ça marche</Link></li>
                                <li><Link to="/secteurs" className="hover:text-white transition-colors">Secteurs ciblés</Link></li>
                                <li><Link to="/tarifs" className="hover:text-white transition-colors">Tarifs</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 font-heading">Légal</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><Link to="/legal" className="hover:text-white transition-colors">Mentions légales</Link></li>
                                <li><Link to="/legal" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
                                <li><Link to="/legal" className="hover:text-white transition-colors">CGV</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} QRPass. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
