import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Legal() {
    return (
        <>
            <Helmet>
                <title>Mentions Légales - QRPass</title>
                <meta name="description" content="Mentions légales, politique de confidentialité et conditions de service de QRPass." />
            </Helmet>
            <section className="pt-32 pb-24 relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center"
                >
                    Mentions <span className="text-gradient">Légales</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-8 md:p-12 space-y-8 text-slate-300"
                >
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
                        <p>Le site Internet QRPass est édité par :</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
                            <li>Nom de la société : QRPass SAS</li>
                            <li>Adresse : 10 rue de la République, 75011 Paris, France</li>
                            <li>Email : bonjour@qrpass.fr</li>
                            <li>Téléphone : 01 80 00 00 00</li>
                            <li>RCS : Paris B 000 000 000</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
                        <p>L'hébergement du site est assuré par :</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
                            <li>Vercel Inc.</li>
                            <li>340 S Lemon Ave #4133</li>
                            <li>Walnut, CA 91789</li>
                            <li>États-Unis</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble des éléments figurant sur le site QRPass (textes, images, logos, vidéos, structure, etc.) sont protégés par les dispositions du Code de la Propriété Intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Données Personnelles et Cookies</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à <a href="mailto:bonjour@qrpass.fr" className="text-brand-light hover:underline">bonjour@qrpass.fr</a>.
                            <br className="my-2" />
                            Ce site utilise des cookies essentiels au fonctionnement technique du point de vente et de simples cookies statistiques anonymisés garantissant le respect de la vie privée.
                        </p>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
