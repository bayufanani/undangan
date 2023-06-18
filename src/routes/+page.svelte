<script lang="ts">
	import '../style.css';
	import { onMount } from 'svelte';
	import { initializeApp } from 'firebase/app';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import {
		getAuth,
		onAuthStateChanged,
		signInAnonymously,
		updateProfile,
		type UserCredential
	} from 'firebase/auth';
	import { Database, getDatabase, onValue, push, ref, set } from 'firebase/database';

	type pesan = {
		nama: string;
		kedatangan: string;
		pesan: string;
	};

	let statusOpen: boolean = false;
	let hari: string = '0',
		jam: string = '0',
		menit: string = '0',
		detik: string = '0';
	let authUser: UserCredential['user'] | undefined = undefined;

	function openInvite() {
		statusOpen = true;
	}

	let inputNama: string = '';
	let inputKedatangan: string = '';
	let inputPesan: string = '';

	let listPesan: Array<pesan> = [];

	let analytics, database: Database;

	async function submit() {
		// simpan nama session
		if (authUser == undefined) {
			alert('error, user are not logged in');
			return;
		}
		await updateProfile(authUser, { displayName: inputNama });
		console.log('usert profile updated');
		await set(ref(database, 'pesan/' + authUser.uid), {
			nama: inputNama,
			kedatangan: inputKedatangan,
			pesan: inputPesan,
			created: Date.now()
		});
		console.log('insert db');
	}

	const tglNikah: number = new Date('Jun 27, 2023 08:00:00').getTime();
	let countdown: NodeJS.Timer | number | undefined = undefined;

	// function timeLeftTo()
	onMount(() => {
		countdown = setInterval(() => {
			const sekarang = new Date().getTime();
			const sisaWaktu = tglNikah - sekarang;

			if (sisaWaktu <= 0) {
				clearInterval(countdown);
				return;
			}

			hari = String(Math.floor(sisaWaktu / (1000 * 60 * 60 * 24)));
			jam = String(Math.floor((sisaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			menit = String(Math.floor((sisaWaktu % (1000 * 60 * 60)) / (1000 * 60)));
			detik = String(Math.floor((sisaWaktu % (1000 * 60)) / 1000));
		}, 1000);

		// TODO: Add SDKs for Firebase products that you want to use
		// https://firebase.google.com/docs/web/setup#available-libraries

		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const firebaseConfig = {
			apiKey: 'AIzaSyDsn_juR5CZ9Cp5I_VjrFnN74ZUMi8Udng',
			authDomain: 'undangan-nikah-6b26a.firebaseapp.com',
			projectId: 'undangan-nikah-6b26a',
			storageBucket: 'undangan-nikah-6b26a.appspot.com',
			messagingSenderId: '445019700121',
			appId: '1:445019700121:web:0bdcc5a84c32b6bd82f108',
			measurementId: 'G-K6SMGLK17N',
			databaseURL: 'https://undangan-nikah-6b26a-default-rtdb.asia-southeast1.firebasedatabase.app/'
		};

		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		analytics = getAnalytics(app);
		database = getDatabase(app);

		const refPesan = ref(database, 'pesan');
		onValue(refPesan, (snapshot) => {
			listPesan = snapshot.val();
		});
		// setTimeout(() => {
		// 	updateProfile(auth.currentUser!, { displayName: 'bayu' })
		// 		.then(() => {
		// 			console.log('updated display with ', auth.currentUser?.displayName);
		// 			authUser = auth.currentUser!;
		// 		})
		// 		.catch((error) => console.log(error));
		// }, 5000);

		const auth = getAuth(app);
		signInAnonymously(auth)
			.then((data) => {
				console.log('you are signed in as: ', data.user.uid, 'with name', data.user.displayName);
				authUser = data.user;
				inputNama = authUser.displayName || '';
				// updateProfile(data.user, { displayName: 'testingaku1222' })
				// 	.then(() => {
				// 		console.log('updated display with ', auth.currentUser?.displayName);
				// 	})
				// 	.catch((error) => console.log(error));
			})
			.catch((error) => console.log(error));

		onAuthStateChanged(auth, (user) => {
			console.log(user?.displayName);
		});
	});
</script>

<div id="cover" class={statusOpen ? 'opened' : ''}>
	<div class="info-nama">
		<div class="mempelai satu">Bayu Rofid Fanani</div>
		<div class="dan">&</div>
		<div class="mempelai dua">Erinta Eka Ruliyanti</div>
		<button class="btn btn-primary" id="open-btn" on:click={openInvite}>Buka undangan</button>
	</div>
</div>
<div id="content">
	<div class="slides" id="slide-1">
		<div class="container">
			<div class="center">
				<p>The wedding of</p>
				<h1>Erinta & Bayu</h1>
				<p>Putri Bapak Sumirin & (Almh.) Ibu Lestari Beserta Putra Bapak Samaji dan Ibu Suminah</p>
			</div>
		</div>
	</div>
	<div class="slides" id="slide-2">
		<div class="container">
			<p class="center">اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ</p>
			<p class="center">
				Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
				perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami untuk
				mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah, warahmah.
			</p>
			<div class="center">
				<div class="mempelai">
					<div class="img-mempelai">
						<img src="./images/erinta_thumbnail.JPG" alt="" width="100%" />
					</div>
					<h3>Erinta Eka Ruliyanti</h3>
					<p>Putri Bapak S umirin & (Almh.) Ibu Sri Lestari</p>
				</div>
				<div class="mempelai-spacer" />
				<div class="mempelai">
					<div class="img-mempelai">
						<img src="./images/bayu_thumbnail.JPG" alt="" width="100%" />
					</div>
					<h3>Bayu Rofid Fanani</h3>
					<p>Putra Bapak Samaji dan Ibu Suminah</p>
				</div>
			</div>
		</div>
	</div>
	<div class="slides" id="slide-3">
		<div class="center">
			<h3>Save the date</h3>
			<h4>Akad</h4>
			<p>
				27 Juni 2023 <br />
				Pukul 08:00 WIB
			</p>
			<h4>Resepsi</h4>
			<p>
				27 Juni 2023 <br />
				Pukul 13:00 WIB <br />
				Lokasi: Rumah Pengantin Perempuan
			</p>
			<h4>Unduh Manten</h4>
			<p>
				28 Juni 2023 <br />
				Pukul 14:00 WIB <br />
				Lokasi: Rumah Pengantin Laki-laki
			</p>
			<h4>Lokasi</h4>
			<p>Dukuh Bandaralim Tengah RT 003/ RW 002 Desa Bandaralim, Kec. Badegan (Erinta Eka)</p>
		</div>
	</div>
	<div class="slides" id="slide-4">
		<div class="center">
			<h3>Count down to</h3>
			<h4>Our Happy Day</h4>
			<div class="countdown">
				<div class="hari">{hari} hari</div>
				<div class="jam">{jam} jam</div>
				<div class="menit">{menit} menit</div>
				<div class="detik">{detik} detik</div>
			</div>
		</div>
	</div>
	<div class="slides" id="slide-5">
		<div class="center">
			<h3>Send Gifts</h3>
		</div>
	</div>
	<div class="slides" id="slide-6">
		<div class="form-container">
			<form action="" on:submit|preventDefault={submit}>
				<h3 class="center">RSVP & Send your wishes</h3>
				<div class="spacer">
					<small>Nama:</small>
					<input
						required
						type="text"
						autocapitalize="words"
						bind:value={inputNama}
						placeholder="Nama Anda"
					/>
				</div>
				<div class="spacer">
					<small>Status Kedatangan:</small> <br />
					<select name="" id="" required bind:value={inputKedatangan}>
						<option value="">Pilih satu</option>
						<option value="datang">Datang</option>
						<option value="tidak_datang">Tidak datang</option>
					</select>
				</div>
				<div class="spacer">
					<small>Pesan dan Doa Anda:</small>
					<textarea
						bind:value={inputPesan}
						required
						cols="30"
						rows="10"
						placeholder="Pesan anda dan doa anda untuk kami"
					/>
				</div>
				<div class="spacer">
					<button class="btn btn-primary">Kirim Pesan dan Doa</button>
				</div>
			</form>
		</div>
	</div>
	<div class="slides" id="slide-7">
		<h3 class="center">Pesan dari undangan</h3>
		<div class="container">
			{#each Object.entries(listPesan) as [id, psn]}
				<div>
					{psn.nama} <br />
					{psn.kedatangan} <br />
					{psn.pesan} <br />
				</div>
			{/each}
		</div>
	</div>
</div>
<div id="navigation">
	<nav>
		<ul>
			<li>H</li>
			<li>J</li>
			<li>K</li>
			<li>L</li>
		</ul>
	</nav>
</div>
