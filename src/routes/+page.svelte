<script lang="ts">
	import '../style.css';
	import { base } from '$app/paths';
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
	import { Database, getDatabase, onValue, ref, set } from 'firebase/database';

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
		const musik = document.querySelector<HTMLAudioElement>('#musik');
		musik?.play();
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
		inputPesan = '';
		alert('Terimakasih atas doanya 😁');
	}

	let doneLoading = false;
	const tglNikah: number = new Date('Jun 27, 2023 08:00:00').getTime();
	let countdown: NodeJS.Timer | number | undefined = undefined;

	function aktifasi(el: MouseEvent) {
		if (el.target == null) return;
		if (el.target instanceof HTMLElement) {
			const target: HTMLElement = el.target;
			if (target.classList.contains('buttons')) {
				// const aktifSekarang = document.querySelector('.buttons.aktif');
				// aktifSekarang?.classList.remove('aktif');
				// target.classList.add('aktif');
				document.querySelector('#' + target.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
				// const targetEl = document
				// .querySelector('#' + target.dataset.target)
				// ?.getBoundingClientRect();
				// document.querySelector('#content')?.scrollTo({ top: targetEl?.top, behavior: 'smooth' });
				// console.log(targetEl?.x, targetEl);
			}
		}
	}

	let playing = true;
	function toggleMusik() {
		const musik = document.querySelector<HTMLAudioElement>('#musik');
		// console.log(musik?.played, musik?.paused);
		if (!musik?.paused) {
			musik?.pause();
			playing = false;
		} else {
			musik?.play();
			playing = true;
		}
	}

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
				doneLoading = true;
				// updateProfile(data.user, { displayName: 'testingaku1222' })
				// 	.then(() => {
				// 		console.log('updated display with ', auth.currentUser?.displayName);
				// 	})
				// 	.catch((error) => console.log(error));
			})
			.catch((error) => console.log(error));

		onAuthStateChanged(auth, (user) => {
			// console.log(user?.displayName);
		});

		const spyScrolling = () => {
			const sections = document.querySelectorAll<HTMLElement>('.slides');
			const content = document.querySelector<HTMLElement>('#content');

			content!.onscroll = () => {
				const scrollPos = content?.scrollTop || document.body.scrollTop;

				// console.log(sections[0].id);
				for (let s in sections)
					if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
						const id = sections[s].id;
						document.querySelector('.aktif')?.classList.remove('aktif');
						const parent = document.querySelector<HTMLElement>(`[data-target=${id}]`);
						parent?.classList.add('aktif');
					}
			};
		};
		spyScrolling();
	});
</script>

<div class="loading" style="display: {doneLoading ? 'none' : 'block'}">
	<h2 class="center">Loading data</h2>
</div>

<div style="display: {doneLoading ? 'block' : 'none'}">
	<div id="cover" class={statusOpen ? 'opened' : ''}>
		<div class="info-nama">
			<div class="mempelai satu">Bayu Rofid Fanani</div>
			<div class="dan">&</div>
			<div class="mempelai dua">Erinta Eka Ruliyanti</div>
			<div class="tujuan-undangan">
				<div>Kepada Yth. Sdr/Sdri:</div>
				<div class="nama-undagan">{inputNama}</div>
			</div>
			<button class="btn btn-primary" id="open-btn" on:click={openInvite}>Buka undangan</button>
		</div>
	</div>
	<audio src="/sounds/beautiful_in_white.mp3" autoplay id="musik" loop />
	<div class="audio-control {playing ? 'playing' : ''}">
		<button class="btn-audio" on:click={toggleMusik}>
			{#if playing}
				<img src="/images/musik-play.png" alt="" height="24" />
			{:else}
				<img src="/images/musik-mute.png" alt="" height="24" />
			{/if}
		</button>
	</div>
	<div id="content">
		<div class="slides" id="slide-1">
			<div class="container">
				<div class="center">
					<p>The wedding of</p>
					<h1>Erinta & Bayu</h1>
					<p>
						Putri Bapak Sumirin & (Almh.) Ibu Lestari Beserta Putra Bapak Samaji dan Ibu Suminah
					</p>
				</div>
			</div>
			<div class="container">
				<p class="center">اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ</p>
				<p class="center">
					Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
					perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami untuk
					mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah,
					warahmah.
				</p>
				<div class="center">
					<div class="mempelai">
						<div class="img-mempelai">
							<img src="/images/erinta_thumbnail.JPG" alt="" width="100%" />
						</div>
						<h3>Erinta Eka Ruliyanti</h3>
						<p>Putri Bapak S umirin & (Almh.) Ibu Sri Lestari</p>
					</div>
					<div class="mempelai-spacer" />
					<div class="mempelai">
						<div class="img-mempelai">
							<img src="/images/bayu_thumbnail.JPG" alt="" width="100%" />
						</div>
						<h3>Bayu Rofid Fanani</h3>
						<p>Putra Bapak Samaji dan Ibu Suminah</p>
					</div>
				</div>
			</div>
		</div>
		<div class="slides" id="slide-3">
			<div class="container">
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
						Lokasi: <a href="https://goo.gl/maps/hLYfCqABuDj75UMs7">Rumah Pengantin Perempuan</a>
						<br />
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d853.7801058816258!2d111.36982072264286!3d-7.882078960908485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1687271517904!5m2!1sen!2sid"
							width="100%"
							height="450"
							style="border:0;"
							title="Rumah Pengantin Perempuan"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
					</p>
					<h4>Unduh Manten</h4>
					<p>
						28 Juni 2023 <br />
						Pukul 14:00 WIB <br />
						Lokasi: <a href="https://goo.gl/maps/WKEYLe3zZNquCbuk8">Rumah Pengantin Laki-laki</a>
						<br />
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d393.8288718481701!2d111.42235525784497!3d-7.865852920366883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1687271670038!5m2!1sen!2sid"
							width="100%"
							height="450"
							style="border:0;"
							title="Rumah Pengantin Laki-laki"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
					</p>
				</div>
			</div>
		</div>
		<div class="slides" id="slide-4">
			<div class="container">
				<div class="center">
					<h3>Count down to</h3>
					<h4>Our Happy Day</h4>
					<h2 class="countdown">
						<div class="hari">{hari} hari</div>
						<div class="jam">{jam} jam</div>
						<div class="menit">{menit} menit</div>
						<div class="detik">{detik} detik</div>
					</h2>
				</div>
			</div>
		</div>
		<div class="slides" id="slide-5">
			<div class="container">
				<div class="center">
					<h3>Send Gifts</h3>
					<p>
						Rumah: <br />
						(Rumah Bpk. Sumirin) Dukuh Bandaralim Tengah RT 003/ RW 002 Desa Bandaralim, Kec. Badegan,
						63455
					</p>
					<br />
					<p>
						<img src="/images/bca.svg" alt="" width="96" /> <br />
						Bank BCA: <br />
						(Erinta Eka E.) 6720601468
					</p>
					<br />
					<p>
						<img src="/images/bri.svg" alt="" width="80" /> <br />
						Bank BRI: <br />
						(Bayu Rofid F.) 3214-01-055001-53-2
					</p>
					<br />
					<p>
						<img src="/images/gopay.png" alt="" width="48" /> <br />
						Gopay: <br />
						+6282336670420
					</p>
				</div>
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

			<div class="container">
				<h3 class="center">Pesan dari undangan</h3>
				{#each Object.entries(listPesan) as [id, psn]}
					<div class="pesan">
						<div class="pesan-header">
							<div class="pesan-nama">
								{psn.nama}
							</div>
							<div>
								<span class="pesan-kedatangan">
									{psn.kedatangan == 'datang' ? 'Datang' : 'Tidak Datang'}
								</span>
							</div>
						</div>
						<div class="pesan-body">
							{psn.pesan}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div id="navigation">
		<nav>
			<ul>
				<li>
					<button
						on:click={(t) => {
							aktifasi(t);
						}}
					>
						<div class="buttons home-button aktif" data-target="slide-1" />
					</button>
				</li>
				<li>
					<button
						on:click={(t) => {
							aktifasi(t);
						}}
					>
						<div class="buttons lokasi-button" data-target="slide-3" />
					</button>
				</li>
				<li>
					<button
						on:click={(t) => {
							aktifasi(t);
						}}
					>
						<div class="buttons kalender-button" data-target="slide-4" />
					</button>
				</li>
				<li>
					<button
						on:click={(t) => {
							aktifasi(t);
						}}
					>
						<div class="buttons gift-button" data-target="slide-5" />
					</button>
				</li>
				<li>
					<button
						on:click={(t) => {
							aktifasi(t);
						}}
					>
						<div class="buttons wish-button" data-target="slide-6" />
					</button>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	.home-button {
		background-image: url('/images/home.png');
	}
	.home-button:hover,
	.home-button.aktif {
		background-image: url('/images/home-aktif.png');
	}
	.lokasi-button {
		background-image: url('/images/lokasi.png');
	}
	.lokasi-button:hover,
	.lokasi-button.aktif {
		background-image: url('/images/lokasi-aktif.png');
	}
	.kalender-button {
		background-image: url('/images/kalender.png');
	}
	.kalender-button:hover,
	.kalender-button.aktif {
		background-image: url('/images/kalender-aktif.png');
	}
	.gift-button {
		background-image: url('/images/gift.png');
	}
	.gift-button:hover,
	.gift-button.aktif {
		background-image: url('/images/gift-aktif.png');
	}
	.wish-button {
		background-image: url('/images/wish.png');
	}
	.wish-button:hover,
	.wish-button.aktif {
		background-image: url('/images/wish-aktif.png');
	}
</style>
