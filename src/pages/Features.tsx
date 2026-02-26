import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    MessageSquare,
    TabletSmartphone,
    BarChart3,
    Timer,
    Smartphone,
    CheckCircle2,
    BellRing
} from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Features() {
    return (
        <>
            <Helmet>
                <title>Comment ça marche - QRPass</title>
                <meta name="description" content="Découvrez le fonctionnement de QRPass étape par étape. Prise de ticket autonome, suivi en temps réel et alertes SMS." />
            </Helmet>
            <section className="pt-32 pb-16 relative">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Comment fonctionne <span className="text-gradient">QRPass</span> ?
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Une technologie puissante et invisible. Pensée pour offrir une expérience fluide à vos clients et une gestion simplifiée pour vos équipes.
                    </motion.p>
                </div>
            </section>

            {/* 3 Steps */}
            <section className="py-16 md:py-24 bg-[var(--color-dark-surface)] border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="gap-16 flex flex-col"
                    >
                        {/* Step 1 */}
                        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 glass p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex gap-4 items-start relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-brand/20 flex-shrink-0 flex items-center justify-center">
                                        <Smartphone className="w-8 h-8 text-brand-light" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">1. Prise de ticket autonome</h3>
                                        <p className="text-slate-400 mb-4">
                                            Votre client arrive dans votre boutique. Au lieu de s'agglutiner, il se dirige vers un QR code ou une petite tablette.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-5 h-5 text-brand" /> Scan du QR Code via son propre téléphone</li>
                                            <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-5 h-5 text-brand" /> Saisie rapide de son numéro de téléphone ou nom</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <span className="text-brand font-bold tracking-widest uppercase text-sm">Étape 1</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Zéro contact, zéro papier</h2>
                                <p className="text-lg text-slate-400">
                                    L'inscription prend moins de 5 secondes. Pas d'application à télécharger pour le client. C'est simple, interactif et hygiénique.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-accent font-bold tracking-widest uppercase text-sm">Étape 2</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Temps libre retrouvé</h2>
                                <p className="text-lg text-slate-400">
                                    Une fois enregistré, votre client peut quitter la boutique physiquement. L'algorithme calcule le temps d'attente estimé.
                                    Le client peut aller chez le boulanger d'en face, le primeur, ou rester dans sa voiture s'il pleut.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex gap-4 items-start relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex-shrink-0 flex items-center justify-center">
                                        <Timer className="w-8 h-8 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">2. Suivi en temps réel</h3>
                                        <p className="text-slate-400 mb-4">
                                            Le client garde un œil sur sa position dans la file d'attente directement depuis son navigateur web.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-5 h-5 text-accent" /> Estimation du temps restant</li>
                                            <li className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-5 h-5 text-accent" /> Nombre de personnes avant lui</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 glass p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex gap-4 items-start relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex-shrink-0 flex items-center justify-center">
                                        <BellRing className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">3. L'alerte SMS</h3>
                                        <p className="text-slate-400 mb-4">
                                            Quand c'est à son tour d'être servi, le vendeur appuie sur un bouton de la tablette.
                                        </p>
                                        <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                                            <p className="text-sm font-mono text-slate-300 mb-1">Un SMS est envoyé à l'instant :</p>
                                            <p className="text-brand-light font-medium flex items-center gap-2"><MessageSquare size={16} /> "C'est votre tour ! Merci de vous présenter à votre conseiller."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Étape 3</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Le rappel automatique</h2>
                                <p className="text-lg text-slate-400">
                                    Fini les appels à voix haute dans une boutique bruyante. Le client revient précisément au moment où vous êtes prêt à le chouchouter. L'expérience est perçue comme un service V.I.P.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Deep-dive Features */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Et pour le commerçant ?</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Une interface gérant intuitive qui ne nécessite aucune formation et des statistiques pour piloter votre activité.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-card p-8 group">
                            <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center mb-6">
                                <TabletSmartphone className="w-6 h-6 text-brand-light" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Tablette Vendeur</h3>
                            <p className="text-slate-400 mb-6">
                                L'application sur tablette permet au vendeur centraliser les attributions et d'appeler les clients en 1 clic.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                    <span>Interface simplifiée pensée pour les mains pleines</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                    <span>Gestion multi-vendeurs (chaque vendeur peut appeler son propre client)</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                    <span>Gestion des abandons si le client ne se présente pas</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card p-8 group">
                            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                                <BarChart3 className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Statistiques & Analyse</h3>
                            <p className="text-slate-400 mb-6">
                                Pilotez votre boutique avec des données concrètes. Anticipez pour mieux gérer vos effectifs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Temps de traitement moyen par client</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Analyse des pics d'affluence par jour et par heure</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Historique des flux de fréquentation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
