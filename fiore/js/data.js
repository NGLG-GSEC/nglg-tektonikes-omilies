/* Fiore Rubinetterie — δεδομένα ιστότοπου (σειρές, φινιρίσματα, κατάλογοι)
   Πηγή: Επαγγελματικός Κατάλογος 2026.1 και φωτογραφικό αρχείο Fiore. */

window.FIORE_CONFIG = {
  // Διεύθυνση της πύλης B2B (αντικαταστήστε με τον σύνδεσμο του B2B αποθετηρίου / GitHub Pages)
  b2bUrl: '#',
  // Email υποδοχής αιτημάτων (φόρμες επικοινωνίας & αίτησης B2B). Κενό = εμφάνιση οδηγίας.
  email: '',
  site: 'https://www.fiore.gr',
  parent: 'https://www.fiore.it'
};

/* ---------- Φινιρίσματα ---------- */
window.FIORE_FINISHES = [
  {
    id: 'basic',
    title: 'Βασικά φινιρίσματα',
    kicker: 'Standard',
    text: 'Η κλασική παλέτα Fiore για κάθε σειρά. Γαλβανικές επιμεταλλώσεις πολλαπλών στρώσεων και βαφές υψηλής αντοχής, δοκιμασμένες στο εργοστάσιο του Borgomanero.',
    items: [
      { code: 'CR', name: 'Χρώμιο', it: 'Cromo', hex: 'linear-gradient(135deg,#f4f5f7,#aeb3b9 45%,#e9ebee 60%,#8e949b)' },
      { code: 'NN', name: 'Μαύρο ματ', it: 'Nero opaco', hex: '#1c1c1e' },
      { code: 'BB', name: 'Λευκό ματ', it: 'Bianco opaco', hex: '#f1f0ec' },
      { code: 'AA', name: 'Όψη ανοξείδωτου', it: 'Simil acciaio', hex: 'linear-gradient(135deg,#c9cac6,#9fa19d 50%,#c4c5c1)' },
      { code: 'CN', name: 'Μαύρο χρώμιο', it: 'Cromo nero', hex: 'linear-gradient(135deg,#5b5d62,#26272a 50%,#4a4c50)' },
      { code: 'GR', name: 'Γραφίτης', it: 'Grafite', hex: '#4a4c4f', note: 'Διαθέσιμο σε λαβές' }
    ]
  },
  {
    id: 'precious',
    title: 'Πολύτιμα μέταλλα',
    kicker: 'Metal',
    text: 'Θερμοί μεταλλικοί τόνοι για κλασικά και σύγχρονα μπάνια με χαρακτήρα.',
    items: [
      { code: 'OO', name: 'Χρυσό', it: 'Oro', hex: 'linear-gradient(135deg,#f6e27a,#c9a22c 50%,#f2d56b)' },
      { code: 'ZZ', name: 'Μπρούντζος', it: 'Bronzo', hex: 'linear-gradient(135deg,#a88157,#6e5031 55%,#9a764c)' },
      { code: 'RR', name: 'Χαλκός', it: 'Rame', hex: 'linear-gradient(135deg,#d99a6c,#a2603a 55%,#cf8c5c)' },
      { code: 'AI', name: 'Ανοξείδωτο AISI 316L', it: 'Acciaio inox', hex: 'linear-gradient(135deg,#dadbd8,#a4a6a2 50%,#d0d1ce)', note: 'Σειρά Xenon Steel' }
    ]
  },
  {
    id: 'matt',
    title: 'Collezione Primavera — Matt',
    kicker: 'Primavera Matt',
    text: 'Δέκα ματ αποχρώσεις εμπνευσμένες από τη φύση. Βελούδινη υφή, ομοιόμορφο χρώμα και προστασία που αντέχει στον χρόνο.',
    items: [
      { code: 'BL', name: 'Μπλε της νύχτας', it: 'Blu notte', hex: '#1f2a44' },
      { code: 'BR', name: 'Βουργουνδί', it: 'Borgogna', hex: '#6b2232' },
      { code: 'TU', name: 'Τιρκουάζ', it: 'Turchese', hex: '#1f9e9a' },
      { code: 'OA', name: 'Ώχρα', it: 'Ocra', hex: '#c8973a' },
      { code: 'GL', name: 'Γλυσίνα', it: 'Glicine', hex: '#b2a1cb' },
      { code: 'SM', name: 'Σμαραγδί', it: 'Smeraldo', hex: '#1d7555' },
      { code: 'CI', name: 'Πούδρα', it: 'Cipria', hex: '#e6c4b8' },
      { code: 'AM', name: 'Ακουαμαρίνα', it: 'Acquamarina', hex: '#83c7c1' },
      { code: 'TO', name: 'Τόρτορα', it: 'Tortora', hex: '#a6ad96' },
      { code: 'LI', name: 'Λάιμ', it: 'Lime', hex: '#c3d45a' }
    ]
  },
  {
    id: 'met',
    title: 'Collezione Primavera — Met',
    kicker: 'Primavera Met',
    text: 'Δεκαπέντε μεταλλικές αποχρώσεις με διακριτική λάμψη. Από το σατινέ ασήμι έως το σκούρο χρυσό, για κάθε ύφος αρχιτεκτονικής.',
    items: [
      { code: 'PP', name: 'Πορφυρό', it: 'Porpora', hex: 'linear-gradient(135deg,#8a3d62,#5a1f3c)' },
      { code: 'OC', name: 'Ανοιχτό χρυσό', it: 'Oro chiaro', hex: 'linear-gradient(135deg,#ecd89a,#c3a860)' },
      { code: 'AD', name: 'Σχιστόλιθος', it: 'Ardesia', hex: 'linear-gradient(135deg,#65707b,#3e4751)' },
      { code: 'TS', name: 'Γη της Σιένα', it: 'Terra di Siena', hex: 'linear-gradient(135deg,#b8683e,#86421f)' },
      { code: 'AO', name: 'Πορτοκαλί', it: 'Arancione', hex: 'linear-gradient(135deg,#f08a3c,#c4581c)' },
      { code: 'CB', name: 'Κοβάλτιο', it: 'Cobalto', hex: 'linear-gradient(135deg,#2f86d6,#1a55a3)' },
      { code: 'CE', name: 'Γαλάζιο', it: 'Celeste', hex: 'linear-gradient(135deg,#a8cbe6,#76a4c9)' },
      { code: 'OS', name: 'Σκούρο χρυσό σατινέ', it: 'Oro scuro satinato', hex: 'linear-gradient(135deg,#b3935a,#7f6333)' },
      { code: 'NK', name: 'Νίκελ', it: 'Nickel', hex: 'linear-gradient(135deg,#b3afa4,#827e74)' },
      { code: 'VG', name: 'Πράσινο νεφρίτη', it: 'Verde giada', hex: 'linear-gradient(135deg,#57a58f,#2f7563)' },
      { code: 'PR', name: 'Ροζ περλέ', it: 'Perla rosa', hex: 'linear-gradient(135deg,#e7b8bb,#c68e93)' },
      { code: 'CH', name: 'Σαμπανιζέ', it: 'Champagne', hex: 'linear-gradient(135deg,#cbb89c,#9d8a70)' },
      { code: 'RA', name: 'Αντίκ ροζ', it: 'Rosa antico', hex: 'linear-gradient(135deg,#cf9d9b,#a26d6c)' },
      { code: 'AG', name: 'Ασημί', it: 'Argento', hex: 'linear-gradient(135deg,#e2e4e6,#a9acaf)' },
      { code: 'SS', name: 'Σατινέ', it: 'Satinato', hex: 'linear-gradient(135deg,#cfcfca,#9e9e98)' }
    ]
  }
];

/* ---------- Σειρές ----------
   cat: bagno | cucina | doccia | classico | inox
   finishes: κωδικοί φινιρίσματος · primavera: διαθέσιμη στη Collezione Primavera */
window.FIORE_SERIES = [
  {
    id: 'kube', name: 'Kube', code: '100', cat: ['bagno'], tone: '#e4ebf3',
    tag: 'Γεωμετρία σε καθαρή μορφή',
    text: 'Αυστηρές ορθές γωνίες και λεπτά επίπεδα. Η Kube είναι η πιο χρωματική σειρά της Fiore: διατίθεται σε όλη την παλέτα Primavera, από κοβάλτιο μέχρι ροζ περλέ, με συμπληρωματικές στήλες ντους.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR'], primavera: true,
    images: [
      { src: '100cb8515', alt: 'Kube αναμικτήρας νιπτήρα σε κοβάλτιο', label: 'Κοβάλτιο · CB' },
      { src: '100bb8517', alt: 'Kube ψηλός αναμικτήρας νιπτήρα σε λευκό ματ', label: 'Λευκό ματ · BB' },
      { src: '100pr8545', alt: 'Kube στήλη ντους σε ροζ περλέ', label: 'Ροζ περλέ · PR' },
      { src: '100cr0963', alt: 'Kube στήλη ντους σε χρώμιο', label: 'Χρώμιο · CR' }
    ]
  },
  {
    id: 'dark', name: 'Dark', code: '140', cat: ['bagno'], tone: '#e7ebe2',
    tag: 'Όταν η ροή γίνεται φιλοσοφία',
    text: 'Κάθε σταγόνα αναδεικνύει την τέχνη της κομψότητας. Επίπεδη λαβή, λεπτό ρύγχος και καθαρό προφίλ για μπάνια με αρχιτεκτονική ταυτότητα.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR'], primavera: true,
    images: [
      { src: '140to4415', alt: 'Dark αναμικτήρας νιπτήρα σε τόρτορα', label: 'Τόρτορα · TO' },
      { src: '140cr4417', alt: 'Dark ψηλός αναμικτήρας νιπτήρα σε χρώμιο', label: 'Χρώμιο · CR' },
      { src: '140cr4430', alt: 'Dark αναμικτήρας μπιντέ σε χρώμιο', label: 'Μπιντέ · CR' }
    ]
  },
  {
    id: 'xenon', name: 'Xenon', code: '444', cat: ['bagno'], tone: '#efe9e1',
    tag: 'Κυλινδρική καθαρότητα',
    text: 'Λεπτός κυλινδρικός κορμός και καμπυλωτό ρύγχος. Η Xenon ντύνεται με τις μεταλλικές αποχρώσεις Primavera Met — σαμπανιζέ, νίκελ, σκούρο χρυσό — για μια ήσυχη πολυτέλεια.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR'], primavera: true,
    images: [
      { src: '444ch5240', alt: 'Xenon αναμικτήρας νιπτήρα σε σαμπανιζέ', label: 'Σαμπανιζέ · CH' }
    ]
  },
  {
    id: 'xenon-charme', name: 'Xenon Charme', code: '136', cat: ['bagno'], tone: '#ece7df',
    tag: 'Ορειχάλκινη λαβή με προστασία PVD',
    text: 'Η εξέλιξη της Xenon: ορειχάλκινη λαβή με επίστρωση PVD, διαθέσιμη σε χρώμιο, μαύρο ματ, ανοξείδωτο, μαύρο-χρώμιο και γραφίτη. Ο κορμός και η λαβή συνδυάζονται ελεύθερα.',
    finishes: ['CR', 'NN', 'AA', 'CN', 'GR'], primavera: false, images: []
  },
  {
    id: 'xenon-slim', name: 'Xenon Slim', code: '444', cat: ['bagno'], tone: '#e9eaec',
    tag: 'Η ελαφρότητα της γραμμής',
    text: 'Λεπτότερες αναλογίες και διακριτική λαβή. Διατίθεται και σε όψη ανοξείδωτου (AA), για συνέπεια με τα αξεσουάρ Xenon Steel.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR'], primavera: true, images: []
  },
  {
    id: 'xenon-steel', name: 'Xenon Steel', code: '440', cat: ['bagno', 'inox'], tone: '#e6e7e5',
    tag: '100% ανοξείδωτος χάλυβας AISI 316L',
    text: 'Όλα τα προϊόντα της σειράς κατασκευάζονται αποκλειστικά από ιταλικό ανοξείδωτο χάλυβα 316L: οικολογικός, ανθεκτικός και αναλλοίωτος στον χρόνο. Από τον νιπτήρα και τη βαλβίδα του έως το ντους και τα αξεσουάρ του.',
    finishes: ['AI'], primavera: false, images: []
  },
  {
    id: 'hedra', name: 'Hedra', code: '130', cat: ['bagno'], tone: '#e8e6ef',
    tag: 'Πολυεδρικός χαρακτήρας',
    text: 'Γεωμετρικές έδρες που παίζουν με το φως. Διατίθεται με μηχανισμό ECOSTOP για εξοικονόμηση νερού και ενέργειας, και σε εντοιχισμένες εκδόσεις με κουτί K-BOX.',
    finishes: ['CR', 'NN', 'CN', 'AA'], primavera: true, images: []
  },
  {
    id: 'katana', name: 'Katana', code: '77', cat: ['bagno', 'doccia'], tone: '#eeeeea',
    tag: 'Η ακρίβεια της λεπίδας',
    text: 'Λαβή με δυναμικό, αιχμηρό προφίλ. Πλήρης γκάμα για νιπτήρα, μπιντέ, λουτρό και εντοιχισμένα ντους.',
    finishes: ['CR'], primavera: false,
    images: [
      { src: '77crp251', alt: 'Katana εντοιχισμένος αναμικτήρας ντους με εκτροπέα', label: 'Εντοιχισμένος · CR' }
    ]
  },
  {
    id: 'kera', name: 'Kera', code: '88', cat: ['bagno', 'doccia'], tone: '#ecebe8',
    tag: 'Μαλακές καμπύλες, στιβαρή βάση',
    text: 'Ο κορμός ανοίγει ομαλά προς τη βάση, σαν γλυπτό. Ιδανική σε μαύρο ή λευκό ματ για αντίθεση με τα κεραμικά.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR'], primavera: false,
    images: [
      { src: '88nn5513', alt: 'Kera αναμικτήρας νιπτήρα σε μαύρο ματ', label: 'Μαύρο ματ · NN' },
      { src: '88bb5513', alt: 'Kera αναμικτήρας νιπτήρα σε λευκό ματ', label: 'Λευκό ματ · BB' },
      { src: '88nn5514', alt: 'Kera ψηλός αναμικτήρας νιπτήρα σε μαύρο ματ', label: 'Ψηλός · NN' },
      { src: '88bb5514', alt: 'Kera ψηλός αναμικτήρας νιπτήρα σε λευκό ματ', label: 'Ψηλός · BB' },
      { src: '88nn5550', alt: 'Kera αναμικτήρας ντους με σετ σε μαύρο ματ', label: 'Ντους · NN' }
    ]
  },
  {
    id: 'kevon', name: 'Kevon', code: '—', cat: ['bagno'], tone: '#e9ecee',
    tag: 'Σύγχρονη καθημερινότητα',
    text: 'Αξιόπιστη, ευέλικτη σειρά για κάθε έργο, διαθέσιμη και σε μαύρο ματ (Kevon NN) καθώς και σε εντοιχισμένες εκδόσεις Easy Cover.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR'], primavera: false, images: []
  },
  {
    id: 'max', name: 'Max', code: '32', cat: ['bagno', 'cucina'], tone: '#eceff1',
    tag: 'Η αξιοπιστία της καθημερινής χρήσης',
    text: 'Διαχρονική σειρά για μπάνιο και κουζίνα, με επιτοίχιους αναμικτήρες νεροχύτη, λουτρού και ντους.',
    finishes: ['CR'], primavera: false,
    images: [
      { src: '32cr4220', alt: 'Max επιτοίχιος αναμικτήρας νεροχύτη', label: 'Νεροχύτης τοίχου · CR' },
      { src: '32cr1250', alt: 'Max αναμικτήρας ντους', label: 'Ντους · CR' },
      { src: '32cr2290', alt: 'Max αναμικτήρας επικαθήμενος λουτρού', label: 'Λουτρό · CR' }
    ]
  },
  {
    id: 'kitchen', name: 'Torino · Venezia · Milano', code: '306', cat: ['cucina'], tone: '#e8ecea',
    tag: 'Νέοι αναμικτήρες κουζίνας',
    text: 'Ψηλά ρύγχη σε σχήμα J, αποσπώμενο ντουσάκι δύο λειτουργιών και εκδόσεις για φιλτραρισμένο νερό. Σε χρώμιο και όψη ανοξείδωτου.',
    finishes: ['CR', 'AA', 'NN'], primavera: false,
    images: [
      { src: '306aa9202', alt: 'Torino αναμικτήρας νεροχύτη με αποσπώμενο ντους σε ανοξείδωτο', label: 'Torino · AA' },
      { src: '306cr9202', alt: 'Torino αναμικτήρας νεροχύτη με αποσπώμενο ντους σε χρώμιο', label: 'Torino · CR' }
    ]
  },
  {
    id: 'kyro', name: 'Kyro · Kyma', code: '—', cat: ['cucina'], tone: '#eeebe6',
    tag: 'Καμπύλες για την κουζίνα',
    text: 'Αναμικτήρες νεροχύτη με περιστρεφόμενο ρύγχος και εργονομική λαβή, σχεδιασμένοι για ένταση χρήσης.',
    finishes: ['CR', 'NN'], primavera: false, images: []
  },
  {
    id: 'altura', name: 'Altura Mia!', code: '—', cat: ['cucina', 'bagno'], tone: '#efe8ea',
    tag: 'Ύψος και προσωπικότητα',
    text: 'Ψηλό ρύγχος για άνεση στο γέμισμα και καθαρή σιλουέτα που ξεχωρίζει.',
    finishes: ['CR'], primavera: false, images: []
  },
  {
    id: 'margot', name: 'Margot', code: '26', cat: ['classico'], tone: '#f3ecdc',
    tag: 'Το κλασικό, στο αυθεντικό του',
    text: 'Σταυρωτές λαβές, πορσελάνινες ενδείξεις και κομψά καμπυλωτά ρύγχη. Σε χρώμιο, χρυσό και μπρούντζο, για ρετρό και νεοκλασικά μπάνια.',
    finishes: ['CR', 'OO', 'ZZ'], primavera: false,
    images: [
      { src: '26oo0623', alt: 'Margot μπαταρία νιπτήρα σε χρυσό', label: 'Χρυσό · OO' },
      { src: '26oo0622', alt: 'Margot μπαταρία νιπτήρα σε χρυσό', label: 'Χρυσό · OO' },
      { src: '26oo0600', alt: 'Margot μπαταρία λουτρού με τηλέφωνο σε χρυσό', label: 'Λουτρό · OO' }
    ]
  },
  {
    id: 'jafar', name: 'Jafar', code: '—', cat: ['classico'], tone: '#efe6da',
    tag: 'Ανατολίτικη κομψότητα',
    text: 'Κλασικές φόρμες με πλούσιες λεπτομέρειες, σε χρώμιο και μπρούντζο.',
    finishes: ['CR', 'ZZ'], primavera: false, images: []
  },
  {
    id: 'classic', name: 'Classic Line · Astro', code: '24 · 14', cat: ['classico'], tone: '#eeeae3',
    tag: 'Διαχρονικές λύσεις',
    text: 'Βρύσες νιπτήρα και κουζίνας, κρουνοί και βάνες για κάθε ανάγκη. Η Classic Line και η Astro καλύπτουν το ευρύ φάσμα των τεχνικών εφαρμογών.',
    finishes: ['CR'], primavera: false, images: []
  },
  {
    id: 'showers', name: 'Ντους & Στήλες', code: '30 · 44', cat: ['doccia'], tone: '#e5ecef',
    tag: 'Κώδωνες, βραχίονες, στήλες',
    text: 'Στήλες ντους με θερμοστατικό ή απλό αναμικτήρα, κεφαλές, τηλέφωνα, βραχίονες και υδροληψίες. Όλα τα απαραίτητα για ένα ολοκληρωμένο ντους.',
    finishes: ['CR', 'NN', 'BB'], primavera: false,
    images: [
      { src: '44cr5193', alt: 'Στήλη ντους με θερμοστατικό αναμικτήρα', label: 'Θερμοστατική στήλη' },
      { src: '44cr0964', alt: 'Στήλη ντους με θερμοστατικό αναμικτήρα', label: 'Στήλη ντους' },
      { src: '30059044', alt: 'Στήλη ντους με ρυθμιζόμενο τηλέφωνο', label: 'Στήλη με ράφι' },
      { src: '30cr8769', alt: 'Τηλέφωνο ντους με στήριγμα', label: 'Σετ τηλεφώνου' }
    ]
  },
  {
    id: 'builtin', name: 'Εντοιχισμένα & Easy Cover', code: '35 · 39 · 81', cat: ['doccia', 'bagno'], tone: '#eaeaea',
    tag: 'Πρώτα το σώμα, μετά η όψη',
    text: 'Στεγανά κουτιά εντοιχισμού 1, 2 και 3 εξόδων. Με το Easy Cover αλλάζετε χρώμα και σχέδιο πρόσοψης σε λιγότερο από 3 λεπτά, χωρίς μαστορέματα.',
    finishes: ['CR', 'NN', 'BB', 'AA', 'OO', 'ZZ', 'RR', 'CN'], primavera: true,
    images: [
      { src: '81cr7527', alt: 'Εντοιχισμένος αναμικτήρας νιπτήρα με ρύγχος τοίχου', label: 'Νιπτήρας τοίχου' },
      { src: '39crp201', alt: 'Εντοιχισμένος αναμικτήρας ντους με εκτροπέα', label: 'Ντους 2 εξόδων' },
      { src: '39crp101', alt: 'Εντοιχισμένος αναμικτήρας ντους', label: 'Ντους 1 εξόδου' },
      { src: '30cr8774', alt: 'Ρύγχος λουτρού τοίχου', label: 'Ρύγχος τοίχου' }
    ]
  },
  {
    id: 'spare', name: 'Ανταλλακτικά & Αξεσουάρ', code: '35', cat: ['doccia'], tone: '#efece6',
    tag: 'Γνήσια ανταλλακτικά Fiore',
    text: 'Σπιράλ, κεφαλές, λαβές, μηχανισμοί, αξεσουάρ μπάνιου και θερμοστατικά Termoty. Ό,τι χρειάζεται ο επαγγελματίας για συντήρηση και αναβάθμιση.',
    finishes: ['CR'], primavera: false,
    images: [
      { src: '35bli090', alt: 'Γνήσιο σπιράλ ντους Fiore σε συσκευασία', label: 'Σπιράλ ντους' }
    ]
  }
];

window.FIORE_CATS = {
  bagno: 'Μπάνιο',
  cucina: 'Κουζίνα',
  doccia: 'Ντους',
  classico: 'Κλασικά',
  inox: 'Inox 316L'
};
