import { MainLayout } from "../layout";
import { GoBack, BigCard, SmallCard } from "../../components";

import { Header } from "../pocketPlans/style";

import {
	CardsContainer,
	TransactionContainer,
	Credit,
} from "../flexPocket/style";

import { Container, TabContainer, Tab, ActiveTab } from "../targetPocket/style";
import { useGetResquest } from "../../api/useRequestProcessor";
import { POCKETPLANS, TARGETSAVE } from "../../constants/routes";
import { useHistory } from "react-router-dom";

import { currencyFormatter } from "../../utils/numberFormater";
import { useState, useEffect } from "react";

const TargetPocket = () => {
	const history = useHistory();
	const [selectedTab, setSelectedTab] = useState(0)
	const { data: viewPocketBalance } = useGetResquest(
		"/users/view-pocket-balance",
		["users", "view-pocket-balance"]
	);

	const { data: completedTargetPockets } = useGetResquest(
		"/target-pocket/completed-target-pockets",
		["target-pocket", "completed-target-pockets"],
		selectedTab === 1
	);
	const { data: currentTargetPockets } = useGetResquest(
		"/target-pocket/current-target-pockets",
		["target-pocket", "current-target-pockets"],
		selectedTab === 0
	);

	const [targetPocketHistory, setTargetPocketHistory] = useState("")

	const Current = selectedTab ? Tab : ActiveTab;
	const Completed = !selectedTab ? Tab : ActiveTab;

	useEffect(() => {
		if (!selectedTab) setTargetPocketHistory(currentTargetPockets)
		else setTargetPocketHistory(completedTargetPockets)
		//console.log("target pocket", selectedTab)
	},
		[currentTargetPockets, completedTargetPockets, selectedTab]
	);

	return (
		<MainLayout>
			<Container>
				<GoBack title={"Go Back"} route={POCKETPLANS} />
				<br />
				<Header>
					<main>
						<h1 style={{ color: "rgba(88, 2, 115, 1)" }}>Target Pocket</h1>
						<p>Here is an overview of how much you have locked</p>
					</main>
					<img src={"/assets/svg/header/notification.svg"} alt={""} />
				</Header>
				<CardsContainer>
					<div style={{ width: "55%" }}>
						<BigCard
							bg={"rgba(239, 236, 240, 1)"}
							cl={"rgba(88, 2, 115, 1)"}
							title={"Target Pocket Balance"}
							text={
								"Keep money aside out of arms reach for as long as you desire, and earn up to 5% interest"
							}
							img={"/assets/svg/bigTarget.svg"}
							icon={"/assets/svg/targetPocket.svg"}
							btnText={"Set New Target"}
							amount={
								currencyFormatter(viewPocketBalance?.data?.targetPocket ?? 0)
							}
							onClick={() => history.push(TARGETSAVE)}
						/>
					</div>
					<div style={{ width: "32%", marginTop: "30px", backgroundColor: "#FAFAFA", padding: 20 }}>
						<h1>Pocket Plans</h1>
						<SmallCard
							routeTo={"/pocket_plans/flex_pocket"}
							title={"Flex Pocket "}
							amount={
								currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"
							}
							content={
								"Flexible savings that alllows you to deposit and withdraw whenever you wish."
							}
							img={"/assets/svg/plan3.svg"}
							bg={"rgba(231, 245, 245, 1)"}
							cl={"rgba(20, 154, 155, 1)"}
						/>

						<SmallCard
							title={"Lock Pocket"}
							routeTo={"/pocket_plans/lock_pocket"}
							amount={
								currencyFormatter(viewPocketBalance?.data?.lockPocket ?? 0)
							} content={
								"Keep money aside out of arms reach for as long as you desire, and earn up to 5% interest."
							}
							img={"/assets/svg/plan1.svg"}
							bg={"rgba(251, 113, 6, 0.1)"}
							cl={"rgba(251, 113, 6, 1)"}
						/>
					</div>
				</CardsContainer>
				<TransactionContainer>
					<TabContainer>
						<Current onClick={() => setSelectedTab(0)}>
							<p>Current</p>
						</Current>
						<Completed onClick={() => setSelectedTab(1)}>
							<p>Completed</p>
						</Completed>
					</TabContainer>

					{
						targetPocketHistory?.data?.map((element, index) => {
							return (
								<Credit
									onClick={() =>
										!element?.pocket_status && history.push(`/pocket_plans/target_withdraw/${element._id}`)
									}
									key={index} className={index === 0 ? "custom-active" : null} style={{ width: "65%", cursor: "pointer", alignItems: "center" }} targetPocket>
									<div className={"customWidth"} style={{ display: "flex", alignItems: "center" }}>
										<div style={{ display: "flex", alignItems: "center", width: "33.3%" }}>
											<img src={"/assets/svg/circleTarget.svg"} alt={""} />
											<p style={{ marginLeft: "10px" }}>{element.title}</p>
										</div>

										<div style={{ width: "66.6%", textAlign: "right", paddingRight: 20 }}>
											<p>Target: {currencyFormatter(element.amount)}</p>
										</div>

										{/* <div className="" style={{ width: "33.3%" }}>
											<p>
												<span style={{ fontSize: "12px", color: "rgba(88, 2, 115, 1)" }}>
													Balance :
												</span>{" "}
												{currencyFormatter(element.balance)}
											</p>
										</div> */}
									</div>
								</Credit>
							)
						})
					}
					{!targetPocketHistory?.data?.length && <p>No Transaction History yet</p>}

				</TransactionContainer>
			</Container>
		</MainLayout>
	);
};

export { TargetPocket };
