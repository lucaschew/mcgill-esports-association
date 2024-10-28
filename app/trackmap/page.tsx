"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MEPPage() {
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState("");

  const googleSheetCsvUrl =
    "https://corsproxy.io/?" +
    encodeURIComponent(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgeG58_HnJ27nFHlARJTUBpE25dnGDCQbhc9XgiGhihrEDeQKc3KlVoqTWe8k3Sp8EDMl73b2hKxGP/pub?gid=0&single=true&output=csv"
    );

  const loadStudentData = async () => {
    try {
      const response = await fetch(googleSheetCsvUrl);
      const data = await response.text();
      const rows = data.split("\n");
      let studentData = {};

      rows.slice(1).forEach((row) => {
        const columns = row.split(",");
        const id = columns[0].trim();
        const meps = columns[1].trim();
        const updatedTime = columns[2].trim();
        if (id && meps && updatedTime) {
          (
            studentData as Record<string, { meps: string; updatedTime: string }>
          )[id] = {
            meps: meps,
            updatedTime: updatedTime,
          };
        }
      });

      return studentData;
    } catch (error) {
      console.error("Error loading Google Sheet data:", error);
      setResult("Failed to load data. Please try again later.");
    }
  };

  const checkMEPS = async () => {
    const studentData = await loadStudentData();
    if (
      studentData &&
      typeof studentData === "object" &&
      studentId in studentData
    ) {
      const student = studentData[studentId as keyof typeof studentData];
      if (student && typeof student === "object") {
        const typedStudent = student as { meps: string; updatedTime: string };
        setResult(
          `MEPS Points for Student ID ${studentId}: ${typedStudent.meps}, Last Updated: ${typedStudent.updatedTime}`
        );
      } else {
        setResult("Invalid student data format.");
      }
    } else {
      setResult("Student ID not registered.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">
        MESA Event Points (MEP) Tracker
      </h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Check Your MEP Points</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium mb-2"
            >
              Enter Student ID:
            </label>
            <input
              type="text"
              id="studentId"
              placeholder="e.g., 260123456"
              className="w-full p-2 border rounded-md"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <Button
            className="w-full bg-mcgill hover:bg-mcgill-vibrant"
            onClick={checkMEPS}
          >
            Check MEP
          </Button>
          {result && (
            <div className="mt-4 text-center font-medium">{result}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
