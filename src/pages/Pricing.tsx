import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Zap,
    Phone
} from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Pricing() {
    return (
        <>
            <Helmet>
                <title>Tarifs & Prix - QRPass</title>
                <meta name="description" content="Découvrez nos tarifs transparents. Pas d'engagement, pas de frais cachés. Choisissez l'offre qui correspond aux besoins de votre commerce." />
            </Helmet>
            <section className="pt-32 pb-16 relative">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Des tarifs <span className="text-gradient">transparents</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Pas d'engagement. Pas de frais cachés. Le coût du service est amorti dès vos premières ventes additionnelles.
                    </motion.p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 md:py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Starter Plan */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 flex flex-col h-full mt-4 md:mt-12 bg-white/5 border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Essentiel</h3>
                            <p className="text-slate-400 mb-6">Pour les commerces indépendants avec un flux régulier</p>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-white">49€</span>
                                <span className="text-slate-400"> /mois</span>
                                <span className="block text-sm text-slate-500 mt-1">HT. Sans engagement.</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                {[
                                    "Jusqu'à 1000 tickets virtuels / mois",
                                    "Interface gérant sur 1 seule tablette",
                                    "Envoi de SMS automatiques (inclus)",
                                    "Statistiques basiques d'affluence",
                                    "Support client par email"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                        <CheckCircle2 className="w-6 h-6 text-slate-400 flex-shrink-0" />
                                        <span className="pt-0.5">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-medium transition-all cursor-pointer">
                                Démarrer l'essai 14j
                            </button>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-3xl border border-brand flex flex-col relative overflow-hidden glow h-full transform md:-translate-y-4"
                        >
                            <div className="absolute top-6 right-6 px-3 py-1 bg-brand text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-brand/30">
                                Populaire
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                Premium
                                <Zap size={20} className="text-yellow-400" />
                            </h3>
                            <p className="text-slate-400 mb-6">Pour les commerces à fort trafic (Halles, Week-ends)</p>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">99€</span>
                                <span className="text-slate-400"> /mois</span>
                                <span className="block text-sm text-slate-500 mt-1">HT. Sans engagement. SMS illimités.</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                {[
                                    "Tickets virtuels et SMS ILLIMITÉS",
                                    "Multi-guichets et multi-vendeurs",
                                    "Support prioritaire par téléphone 7j/7",
                                    "Tableau de bord analytique avancé",
                                    "Personnalisation du SMS avec votre marque",
                                    "Export complet des données Excel"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0" />
                                        <span className="pt-0.5">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 bg-gradient-to-r from-brand to-accent hover:opacity-90 text-white rounded-xl font-bold transition-all shadow-xl shadow-brand/25 cursor-pointer flex items-center justify-center gap-2">
                                Commencer maintenant
                                <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ ou Assurance */}
            <section className="py-24 bg-[var(--color-dark-surface)] border-y border-white/5 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center mb-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-8 h-8 text-green-400" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Technologie fiable</h4>
                            <p className="text-slate-400 max-w-xs">Serveurs ultra-rapides, SMS garantis d'arriver dans les secondes.</p>
                        </div>
                        <div className="hidden md:block w-px h-32 bg-white/10"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                                <Phone className="w-8 h-8 text-blue-400" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Support humain</h4>
                            <p className="text-slate-400 max-w-xs">Une équipe experte du retail basée en France disponible en cas de pépin.</p>
                        </div>
                    </div>

                    <p className="text-lg text-slate-400">
                        Besoin d'une solution sur-mesure pour une grande surface ou un marché complet ?
                    </p>
                    <Link to="/contact" className="mt-6 inline-flex text-brand-light font-bold hover:underline">
                        Discuter avec l'équipe commerciale →
                    </Link>
                </div>
            </section>
        </>
    );
}
