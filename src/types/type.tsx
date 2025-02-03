

export type Personal = {
  label: string; // Label untuk field
  type: "text" | "email" | "tel"; // Tipe input
  placeholder: string; // Placeholder untuk input
  fieldName: string; // Nama field untuk pengelolaan data
}[];


export const personal: Personal = [
  {
    label: "Name",
    type: "text",
    placeholder: "Nama personel",
    fieldName: "name",
  },
  {
    label: "Jabatan",
    type: "text",
    placeholder: "Jabatan personel",
    fieldName: "jabatan",
  },
  {
    label: "Telephone",
    type: "tel",
    placeholder: "Masukkan nomor telepon",
    fieldName: "telephone",
  },
  {
    label: "Mobile Number",
    type: "tel",
    placeholder: "Masukkan nomor ponsel",
    fieldName: "mobileNumber",
  },
  {
    label: "Ext",
    type: "text",
    placeholder: "Masukkan ekstensi",
    fieldName: "ext",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Masukkan email",
    fieldName: "email",
  },
  {
    label: "Personel Keuangan ",
    type: "text",
    placeholder: "Nama personel keuangan",
    fieldName: "financeName",
  },
  {
    label: "Personel Keuangan Jabatan",
    type: "text",
    placeholder: "Jabatan personel keuangan",
    fieldName: "financePosition",
  },
  {
    label: "Personel Keuangan Telephone",
    type: "tel",
    placeholder: "Nomor telepon keuangan",
    fieldName: "financeTelephone",
  },
  {
    label: "Personel Keuangan Mobile Number",
    type: "tel",
    placeholder: "Nomor ponsel keuangan",
    fieldName: "financeMobileNumber",
  },
  {
    label: "Personel Keuangan Ext",
    type: "text",
    placeholder: "Ekstensi telepon keuangan",
    fieldName: "financeExt",
  },
  {
    label: "Personel Keuangan Email",
    type: "email",
    placeholder: "Email personel keuangan",
    fieldName: "financeEmail",
  },
];

export const invoiceInformation = [
  {
    label: "Perusahaan Tertagih",
    type: "text",
    placeholder: "Masukkan nama perusahaan tertagih",
    fieldName: "billedCompany",
  },
  {
    label: "Personel Penghubung",
    type: "text",
    placeholder: "Masukkan nama personel penghubung",
    fieldName: "contactPerson",
  },
  {
    label: "Alamat",
    type: "text",
    placeholder: "Masukkan alamat",
    fieldName: "address",
  },
  {
    label: "Telephone",
    type: "tel",
    placeholder: "Masukkan nomor telepon",
    fieldName: "telephone",
  },
  {
    label: "Ext",
    type: "text",
    placeholder: "Masukkan ekstensi",
    fieldName: "ext",
  },
  {
    label: "Fax",
    type: "tel",
    placeholder: "Masukkan nomor fax",
    fieldName: "fax",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Masukkan email",
    fieldName: "email",
  },
];

export const sampleDescription = [
  {
    label: "Nama Sampel",
    type: "text",
    placeholder: "Masukkan nama sampel",
    fieldName: "sampleName",
  },
  {
    label: "Kode",
    type: "text",
    placeholder: "Masukkan kode sampel",
    fieldName: "code",
  },
  {
    label: "Permintaan Uji",
    type: "text",
    placeholder: "Masukkan permintaan uji",
    fieldName: "testRequest",
  },
  {
    label: "Metode/Regulasi",
    type: "text",
    placeholder: "Masukkan metode atau regulasi",
    fieldName: "methodRegulation",
  },
  {
    label: "Permintaan layanan",
    type: "select",
    placeholder: "Pilih jenis produk",
    options: [
      "Reguler",
      "Urgent",
      "Very Urgent",
    ],
  },
];

export const section1Form = [
  { label: "Nama Perusahaan", placeholder: "Masukkan nama perusahaan" },
  {
    label: "Jenis Produk",
    type: "select",
    placeholder: "Pilih jenis produk",
    options: [
      "Makanan & Minuman / Food & Beverage",
      "Kecantikan & Perawatan Diri / Beauty & Personal Care",
      "Farmasi / Pharmaceutical",
      "Obat Tradisional & Suplemen / Traditional Medicine & Supplement",
      "Penelitian / Kebutuhan Akademis / Research / Academic Purposes",
      "Produk K3L / K3L Product",
      "ALKES & PKRT / Medical Device & Hygiene Product",
      "Pakan, Pestisida & PSAT / Feed, Pesticides, & PSAT",
      "Balai / Kedinasan / Government / Municipality",
    ],
  },
  {
    label: "Tujuan Pengujian",
    type: "select",
    placeholder: "Pilih tujuan pengujian",
    options: [
      "Registrasi Produk / Product Registration",
      "Ekspor/Impor (SKI/SKE) / Export/Import",
      "Sertifikasi SNI / SNI Certification",
      "Quality Check (QC)",
      "Penelitian & Pengembangan / Research & Development",
      "Lainnya… / Others",
    ],
  },
  {
    label: "Alamat",
    type: "textarea",
    placeholder: "Masukkan alamat perusahaan",
    rows: 3,
  },
  { label: "Negara Asal", placeholder: "Masukkan negara asal" },
  { label: "Kode Pos", placeholder: "Masukkan kode pos" },
  { label: "Telephone", placeholder: "Masukkan nomor telepon" },
  { label: "Mobile Number", placeholder: "Masukkan nomor ponsel" },
  {
    label: "Nomor Registrasi Usaha",
    placeholder: "Masukkan nomor registrasi usaha",
  },
  { label: "VAT/NPWP No.", placeholder: "Masukkan nomor VAT/NPWP" },
];

export const sectionFieldsTop = section1Form.slice(0, 3); 
export const sectionFieldsbottom = section1Form.slice(4, 10); 
