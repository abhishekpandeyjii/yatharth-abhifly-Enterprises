'use server';

import { initializeFirebase } from "@/firebase";
import { collection, addDoc, serverTimestamp, type Firestore } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

type GeneralInquiry = {
  name: string;
  phone: string;
  requirement: string;
};

type DealerInquiry = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
};

// Memoize the Firebase instance to avoid re-initialization on every server action.
let db: Firestore | null = null;
function getDb() {
    if (!db) {
        const { firestore } = initializeFirebase();
        db = firestore;
    }
    return db;
}

export async function saveGeneralInquiry(inquiry: GeneralInquiry) {
  const firestore = getDb();
  const inquiriesCollection = collection(firestore, 'generalInquiries');
  const data = {
    ...inquiry,
    submittedAt: serverTimestamp(),
  };

  addDoc(inquiriesCollection, data).catch(async (error) => {
    const permissionError = new FirestorePermissionError({
      path: inquiriesCollection.path,
      operation: 'create',
      requestResourceData: data,
    });
    errorEmitter.emit('permission-error', permissionError);
  });
}

export async function saveDealerInquiry(inquiry: DealerInquiry) {
    const firestore = getDb();
    const inquiriesCollection = collection(firestore, 'dealerInquiries');
    const data = {
      ...inquiry,
      submittedAt: serverTimestamp(),
    };
    
    addDoc(inquiriesCollection, data).catch(async (error) => {
        const permissionError = new FirestorePermissionError({
            path: inquiriesCollection.path,
            operation: 'create',
            requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
    });
}
