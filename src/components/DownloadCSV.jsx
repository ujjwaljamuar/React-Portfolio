import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import "firebase/compat/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import "../styles/DownloadCSV.scss";

// Initialize Firebase
// Replace the Firebase configuration with your own

const firestore = getFirestore();

const DownloadCSV = () => {
    const [csvData, setCSVData] = useState("");

    const handleDownload = () => {
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "data.csv";
        link.click();
    };

    const fetchDataFromFirestore = async () => {
        try {
            // const snapshot = await firestore.collection("contacts").get();
            const contacts = collection(firestore, "contacts");
            const snapshot = await getDocs(contacts);
            let csvContent = "";
            snapshot.forEach((doc) => {
                const data = doc.data();
                const csvRow = Object.values(data).join(",");
                csvContent += `${csvRow}\r\n`;
            });
            setCSVData(csvContent);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    return (
        <div>
            <button onClick={fetchDataFromFirestore}>
                <AiOutlineCloudDownload />
            </button>
            {csvData && (
                <button onClick={handleDownload}>
                    <IoMdDownload />
                </button>
            )}
        </div>
    );
};

export default DownloadCSV;
