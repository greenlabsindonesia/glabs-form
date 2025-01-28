import Sidebar from "../../components/user/Sidebar";
import Header from "../../components/user/Header";
import Form from "../../components/user/Form";

const ClientApprovalForm = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <Header />
        <div className="flex-1 m-4 overflow-auto scrollbar-hide">
          <div className="w-full ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientApprovalForm;
