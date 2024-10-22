import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pendidikan from './pages/pendidikan';
import PKM from './pages/pkm';
import DesiminasiHasilPenelitian from './pages/desiminasihasilpenilitian';
import Login from './pages/Login';
import UploadProgresPenelitian from './pages/uploadprogrespenelitian';
import UploadLaporanPenelitian from './pages/uploadlaporanpenilitian';
import UploadSertifikatDesiminasi from './pages/uploadsertifikatdesiminasi';
import UploadHasilReview from './pages/uploadhasilreview';
import UploadProposal from './pages/uploadproposal';
import PemrogramanDasar from './pages/pemrgraman-dasar';
import PengembanganWeb from './pages/pengembangan-web';
import BasisData from './pages/basis-data';
import Penelitian from './pages/penelitian';
import Kewirausahaan from './pages/kewirausahaan';
import PengabdianMasyarakat from './pages/pengabdian-masyarakat';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/pendidikan" element={<Pendidikan />} />
          <Route path="/pkm" element={<PKM />} />
          <Route path="/desiminasihasilpenelitian" element={<DesiminasiHasilPenelitian />} />
          <Route path="/login" element={<Login />} />
          <Route path="/uploadprogrespenelitian" element={<UploadProgresPenelitian />} />
          <Route path="/uploadlaporanpenelitian" element={<UploadLaporanPenelitian />} />
          <Route path="/uploadsertifikatdesiminasi" element={<UploadSertifikatDesiminasi />} />
          <Route path="/uploadhasilreview" element={<UploadHasilReview />} />
          <Route path="/uploadproposal" element={<UploadProposal />} />
          <Route path="/pemrograman-dasar" element={<PemrogramanDasar />} />
          <Route path="/pengembangan-web" element={<PengembanganWeb />} />
          <Route path="/basis-data" element={<BasisData />} />
          <Route path="/penelitian" element={<Penelitian />} />
          <Route path="/kewirausahaan" element={<Kewirausahaan />} />
          <Route path="/pengabdian-masyarakat" element={<PengabdianMasyarakat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
