const { Firestore } = require('@google-cloud/firestore');

// Inisialisasi Firestore dengan Service Account
const firestore = new Firestore({
  projectId: 'submissionmlgc-panda', // Ganti dengan Project ID Firestore Anda
  keyFilename: './key-firestore.json', // Path ke Service Account Key
});

module.exports = { firestore };
