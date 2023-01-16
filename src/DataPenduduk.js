import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

const KelurahanKampungBaru = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-home">
      <Header toggle={toggle} setToggle={setToggle} />

      <div
        className="h-screen flex flex-col 
                    items-center justify-center"
      >
        <p className="text-white text-xl mb-3 underline">Data Penduduk</p>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-white uppercase bg-aksen ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No
                </th>
                <th scope="col" class="px-6 py-3">
                  Nama
                </th>
                <th scope="col" class="px-6 py-3">
                  Nomor KK
                </th>
                <th scope="col" class="px-6 py-3">
                  Nomor KTP
                </th>
                <th scope="col" class="px-6 py-3">
                  Kelurahan
                </th>
                <th scope="col" class="px-6 py-3">
                  Alamat
                </th>
                <th scope="col" class="px-6 py-3">
                  Alamat Domisili
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  CANDRA DERMAWAN
                </th>
                <td class="px-6 py-4">1271151912190005</td>
                <td class="px-6 py-4">1271156207580002</td>
                <td class="px-6 py-4">Hamdan</td>
                <td class="px-6 py-4">JL. B KATAMSO GG. JARAK NO 20</td>
                <td class="px-6 py-4">JL. B KATAMSO GG. JARAK NO 20</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  DEDI CHANDRA
                </th>
                <td class="px-6 py-4">1271152707090005</td>
                <td class="px-6 py-4">1271151705760001</td>
                <td class="px-6 py-4">Jati</td>
                <td class="px-6 py-4">JL. B. KATAMSO GG. JARAK NO. 11</td>
                <td class="px-6 py-4">JL. B. KATAMSO GG. JARAK NO. 11</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  RIDWAN
                </th>
                <td class="px-6 py-4">1271150509050002</td>
                <td class="px-6 py-4">1271150810520001</td>
                <td class="px-6 py-4">Sukaraja</td>
                <td class="px-6 py-4">JL. B. KATAMSO GG. PEMUDA NO. 13</td>
                <td class="px-6 py-4">JL. B. KATAMSO GG. PEMUDA NO. 13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KelurahanKampungBaru;
