
function DashboardCard({ title, value, icon, color }) {

    return (

        <div className="card border-0 shadow-sm h-100 dashboard-card">

            <div className="card-body d-flex align-items-center p-4">

                <div
                    className={`rounded-circle d-flex align-items-center justify-content-center ${color}`}
                    style={{
                        width: "65px",
                        height: "65px",
                        color: "#fff",
                        fontSize: "26px",
                        flexShrink: 0
                    }}
                >
                    {icon}
                </div>

                <div className="ms-4">

                    <h6 className="text-muted mb-1">
                        {title}
                    </h6>

                    <h2 className="fw-bold mb-0">
                        {value}
                    </h2>

                </div>

            </div>

        </div>

    );
}

export default DashboardCard;