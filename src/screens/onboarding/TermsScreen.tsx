import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/TermsScreen.styles";
import { RootStackParamList } from "../../navigation/AuthNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Satoshi from "../../components/fonts/satoshi";

const TermsScreen = () => {
	const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<ScrollView>
			<View style={styles.container}>
				<View>
					<Satoshi style={styles.header}>Terms & Conditions</Satoshi>
					<Satoshi style={styles.date}>Updated May 5, 2023</Satoshi>
				</View>
				<View style={styles.body}>
					<Satoshi style={styles.bodyText}>
						Acceptance of Terms and Conditions By accessing and using the NDIA
						platform, you agree to comply with the terms and conditions outlined
						below. These terms govern your use of the NDIA website, mobile
						applications, and associated services.
					</Satoshi>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>User Responsibilities</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>1.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Customers: Customers are responsible for providing accurate and
							up-to-date information when placing orders. NDIA is not liable for
							any issues arising from incorrect or incomplete information
							provided by customers.
						</Satoshi>
					</View>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>2.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Vendors: Vendors are responsible for maintaining accurate product
							listings, pricing, and availability on the NDIA platform. NDIA
							reserves the right to take necessary action if vendors violate
							terms or fail to meet quality standards.
						</Satoshi>
					</View>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>3.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Riders: Riders are responsible for delivering orders promptly and
							ensuring the safety and integrity of the delivered items. They
							should adhere to delivery protocols and guidelines provided by
							NDIA.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>Ordering and Delivery</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>1.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Orders: Customers can place orders through the NDIA platform,
							selecting their desired vendor and items. NDIA is not responsible
							for the quality or accuracy of the products provided by vendors.
						</Satoshi>
					</View>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>2.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Delivery: NDIA strives to provide accurate delivery estimates, but
							actual delivery times may vary depending on various factors. NDIA
							is not responsible for delays caused by external circumstances
							beyond its control.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>Payment and Fees</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>1.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Customers: Customers agree to pay for their orders through the
							payment methods accepted on the NDIA platform. NDIA reserves the
							right to charge applicable taxes, delivery fees, or service
							charges.
						</Satoshi>
					</View>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>2.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Vendors: Vendors agree to pay a commission fee to NDIA based on
							the agreed-upon percentage of each order's total value. Commission
							rates may vary based on sales volume or promotional offers.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>
						Cancellations and Refunds
					</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>1.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Customers: Customers can cancel orders before they are confirmed
							by the vendor. Refunds for canceled orders are subject to the
							vendor's refund policy.
						</Satoshi>
					</View>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyTextList}>2.</Satoshi>
						<Satoshi style={styles.bodyText}>
							Vendors: Vendors may have their own cancellation and refund
							policies, which should be communicated to customers clearly. NDIA
							is not responsible for vendor policies regarding cancellations or
							refunds.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>Intellectual Property</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyText}>
							NDIA retains all rights to its website, mobile applications,
							logos, trademarks, and other intellectual property. Users are
							prohibited from using, copying, or reproducing any NDIA
							intellectual property without prior written consent.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>
						Privacy and Data Protection
					</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyText}>
							NDIA takes privacy and data protection seriously. By using the
							platform, you acknowledge and agree to the NDIA Privacy Policy,
							which outlines how personal information is collected, used, and
							protected.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>
						Limitation of Liability
					</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyText}>
							NDIA is not liable for any direct, indirect, incidental, or
							consequential damages arising from the use or inability to use the
							platform, including but not limited to loss of profits, data, or
							business opportunities.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>
						Modifications to Terms and Conditions
					</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyText}>
							NDIA reserves the right to modify or update these terms and
							conditions at any time. Users will be notified of any significant
							changes, and continued use of the platform constitutes acceptance
							of the modified terms.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<Satoshi style={styles.sectionHeader}>
						Governing Law and Jurisdiction
					</Satoshi>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyText}>
							These terms and conditions are governed by the laws of Nigeria.
							Any disputes arising from the use of the NDIA platform shall be
							subject to the exclusive jurisdiction of the courts in Nigeria.
						</Satoshi>
					</View>
				</View>
				<View style={styles.section}>
					<View style={styles.orderedList}>
						<Satoshi style={styles.bodyText}>
							By accessing and using the NDIA platform, you indicate your
							acceptance of these terms and conditions. If you do not agree with
							any part of these terms, please refrain from using the NDIA
							platform.
						</Satoshi>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => navigate("Signup")}
					style={styles.button}
				>
					<Satoshi style={styles.buttonCTA}>Get Started</Satoshi>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
export default TermsScreen;
