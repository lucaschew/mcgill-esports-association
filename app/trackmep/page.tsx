"use client";

import { useState } from "react";
import axios from "axios";
import Head from "next/head";

export default function MEPTracker() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const googleSheetCsvUrl =
    "https://proxy.cors.sh/https://docs.google.com/spreadsheets/d/e/2PACX-1vSgeG58_HnJ27nFHlARJTUBpE25dnGDCQbhc9XgiGhihrEDeQKc3KlVoqTWe8k3Sp8EDMl73b2hKxGP/pub?gid=0&single=true&output=csv";

  const loadStudentData = async () => {
    try {
      const response = await axios.get(googleSheetCsvUrl, {
        headers: {
          "x-cors-api-key":
            "live_2dd32c43499521e11bca38cdb4d743d3879fdd381335871930cfecc151dd6d4b",
        },
      });

      const rows = response.data.split("\n");
      let studentData: {
        [key: string]: { meps: string; updatedTime: string };
      } = {};

      rows.slice(1).forEach((row: string) => {
        const columns = row.split(",");
        const studentId = columns[0].trim();
        const meps = columns[1].trim();
        const updatedTime = columns[2].trim();
        if (studentId && meps && updatedTime) {
          (
            studentData as {
              [key: string]: { meps: string; updatedTime: string };
            }
          )[studentId] = {
            meps: meps,
            updatedTime: updatedTime,
          };
        }
      });

      return studentData;
    } catch (error) {
      console.error("Error loading Google Sheet data:", error);
      alert("Failed to load Google Sheet data. Please try again later.");
    }
  };
  const checkMEPS = async () => {
    const studentIdElement = document.getElementById(
      "studentId"
    ) as HTMLInputElement;
    const studentId = studentIdElement?.value.trim() || "";
    setLoading(true);
    setResult("");

    const studentData = await loadStudentData();
    setLoading(false);

    if (
      studentData &&
      studentId in
        (studentData as {
          [key: string]: { meps: string; updatedTime: string };
        })
    ) {
      const typedStudentData = studentData as {
        [key: string]: { meps: string; updatedTime: string };
      };
      setResult(
        `MEPS Points for Student ID ${studentId}: ${typedStudentData[studentId].meps}, Last Updated: ${typedStudentData[studentId].updatedTime}`
      );
    } else {
      setResult("Student ID not registered.");
    }
  };

  return (
    <>
      <Head>
        <title>MESA Event Points (MEP) Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="mep-tracker-wrapper">
        <div className="container">
          <h2 style={{ color: "black" }}>MESA Event Points (MEP) Tracker</h2>
          <label htmlFor="studentId">Enter Student ID Below</label>
          <input
            type="text"
            id="studentId"
            placeholder="e.g., 260123456"
            required
          />
          <button onClick={checkMEPS}>Check MEP</button>
          {loading && <div className="loader" />}
          <div id="result">{result}</div>
        </div>
      </div>

      <style jsx>{`
        .mep-tracker-wrapper {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: white;
        }
        .mep-tracker-wrapper .container {
          max-width: 500px;
          margin: 0 auto;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .mep-tracker-wrapper h2 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #ed1b2f;
        }
        .mep-tracker-wrapper label {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
          text-align: center;
        }
        .mep-tracker-wrapper input {
          width: 70%;
          margin: 0 auto;
          display: block;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 15px;
        }
        .mep-tracker-wrapper button {
          width: 100%;
          padding: 10px;
          background-color: #ed1b2f;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }
        .mep-tracker-wrapper button:hover {
          background-color: #aa4b31;
        }
        .mep-tracker-wrapper #result {
          margin-top: 20px;
          font-weight: bold;
          text-align: center;
        }
        .mep-tracker-wrapper .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #ed1b2f;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 2s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
