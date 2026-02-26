import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Clock,
    ThumbsUp,
    ArrowRight,
    Store,
    Users,
    BarChart3,
    MessageSquare,
    TabletSmartphone,
    Timer
} from 'lucide-react';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>QRPass - Logiciel de gestion de file d'attente sécurisé</title>
                <meta name="description" content="QRPass libère vos clients en transformant l'attente avec un système de QR Code et ticket virtuel. Mettez fin aux files d'attente interminables." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto"
                    >
                        Mettez fin aux files d'attente interminables et <span className="text-gradient">fidélisez vos clients</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-10 max-w-3xl mx-auto"
                    >
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-4">
                            Vos clients prennent un ticket virtuel, vont faire d'autres courses,
                            et sont prévenus par SMS quand c'est leur tour.
                        </p>
                        <p className="text-2xl md:text-3xl font-bold font-heading text-white">
                            Plus de stress, <span className="text-gradient">plus de ventes.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand to-accent hover:opacity-90 text-white rounded-xl font-bold text-lg shadow-lg shadow-brand/25 transition-all flex items-center justify-center gap-2 cursor-pointer">
                            Démarrer l'essai gratuit
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link to="/fonctionnement" className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                            Découvrir le fonctionnement
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Auto Scrolling Marquee Clients */}
            <section className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                    <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">Ils utilisent notre solution au quotidien</p>
                </div>
                <div className="flex w-[200%] md:w-[150%] animate-marquee">
                    <div className="flex items-center justify-around w-1/2 shrink-0">
                        <div className="text-2xl font-bold font-heading text-white/50">Marché de MO</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Boucherie La Côte</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Pharmacie Centrale</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Boulangerie L'Épi d'Or</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Le Petit Primeur</div>
                    </div>
                    <div className="flex items-center justify-around w-1/2 shrink-0">
                        <div className="text-2xl font-bold font-heading text-white/50">Marché de MO</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Boucherie La Côte</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Pharmacie Centrale</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Boulangerie L'Épi d'Or</div>
                        <div className="text-2xl font-bold font-heading text-white/50">Le Petit Primeur</div>
                    </div>
                </div>
            </section>

            {/* Social Proof metrics */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Heures de temps libre rendues", value: "+25 000", icon: <Clock className="w-6 h-6 mx-auto mb-3 text-brand-light" /> },
                            { label: "Commerçants satisfaits", value: "500+", icon: <Store className="w-6 h-6 mx-auto mb-3 text-accent" /> },
                            { label: "Augmentation du panier moyen", value: "+18%", icon: <BarChart3 className="w-6 h-6 mx-auto mb-3 text-brand-light" /> },
                            { label: "Clients fidélisés", value: "2M+", icon: <Users className="w-6 h-6 mx-auto mb-3 text-accent" /> },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-4"
                            >
                                {stat.icon}
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brief Overview */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Le concept est <span className="text-gradient">simple et puissant</span></h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                Pourquoi obliger vos clients à faire la queue debout pendant 30 minutes alors qu'ils pourraient profiter de ce temps pour flâner, boire un café ou finaliser d'autres achats dans le quartier ?
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                QRPass libère vos clients et transforme radicalement l'expérience en boutique, augmentant par la même occasion votre panier moyen et la sérénité de vos équipes.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand-light"><MessageSquare size={20} /></div>
                                    <span className="text-white font-medium text-lg">Alertes SMS automatiques</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent"><TabletSmartphone size={20} /></div>
                                    <span className="text-white font-medium text-lg">Interface 100% digitale sur tablette</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Timer size={20} /></div>
                                    <span className="text-white font-medium text-lg">Prédiction du temps d'attente</span>
                                </li>
                            </ul>

                            <Link to="/secteurs" className="inline-flex items-center gap-2 text-brand-light hover:text-brand transition-colors font-bold text-lg">
                                Voir si QRPass est fait pour vous <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-accent/20 rounded-3xl blur-2xl transform rotate-3"></div>
                            <div className="glass-card p-2 rounded-3xl relative">
                                <div className="bg-[var(--color-dark-surface)] rounded-2xl overflow-hidden aspect-[4/3] flex flex-col pt-8 items-center border border-white/10 shadow-inner">
                                    {/* Mockup UI simplified */}
                                    <div className="w-3/4 bg-brand/10 p-4 rounded-t-xl border border-brand/20 border-b-0">
                                        <div className="text-center mb-4">
                                            <h4 className="font-bold text-white mb-1">Ticket #402</h4>
                                            <p className="text-sm text-slate-400">Temps estimé : ~15 min</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-10 bg-white/5 rounded-lg flex items-center px-4 justify-between">
                                                <span className="text-slate-300">#401 (En cours)</span>
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            </div>
                                            <div className="h-12 bg-gradient-to-r from-brand to-accent rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
                                                C'est bientôt à vous !
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials snippet */}
            <section className="py-24 bg-[var(--color-dark-surface)] border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ils ont transformé leur commerce</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Laurent D.",
                                role: "Artisan Boucher",
                                quote: "Depuis qu'on utilise QRPass, la boutique respire. Les clients du dimanche ne s'agglutinent plus, ils vont prendre un café à côté et reviennent détendus.",
                            },
                            {
                                name: "Sophie M.",
                                role: "Gérante de Pharmacie",
                                quote: "Essentiel pour la confidentialité ! Les patients patientent dehors ou dans leur voiture et l'interface gérant est ultra intuitive pour mon équipe.",
                            },
                            {
                                name: "Karim H.",
                                role: "Maître Boulanger",
                                quote: "Mes ventes croisées ont augmenté car les clients reviennent avec d'autres achats du quartier. Le tableau de bord me permet de mieux gérer mes plannings.",
                            }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 relative"
                            >
                                <ThumbsUp className="w-8 h-8 text-white/20 absolute top-8 right-8" />
                                <p className="text-slate-300 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center font-bold text-white text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/10 -z-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Prêt à moderniser votre point de vente ?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Rejoignez des centaines de commerçants qui ont transformé l'attente en une expérience positive pour leurs clients.
                    </p>
                    <button className="px-10 py-5 bg-white text-brand-dark hover:scale-105 active:scale-95 rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer">
                        Démarrer l'essai maintenant
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </section>
        </>
    );
}
